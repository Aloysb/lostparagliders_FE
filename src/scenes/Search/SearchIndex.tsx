import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

//Spinners
import { Ring } from 'react-spinners-css';

//Containers
import CenterContainer from '../../components/CenterContainer/CenterContainer';

//Components
import Button from '../../components/Button/Button';
import SearchInput from '../../components/SearchInput/SearchInput';

const Search = () => {
  //Set up state.
  const [searchValue, changeSearchValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Remove non alphanumeric characters
  // const slugify = (value: string) => {
  //   return value.replace(/\W/gi, '').toLowerCase();
  // };

  const searchValueChange = (e: React.FormEvent<HTMLInputElement>) => {
    //Get value of the input out of the event.
    let searchValue = e.currentTarget.value;
    //Set state to input value.
    changeSearchValue(searchValue);
    //Reset error message
    setErrorMessage('');
  };

  // Set up navigation hook for react-router.
  let history = useHistory();

  // Query the db.
  const queryDbWithInput = () => {
    // If no input, display error message to user.
    if (searchValue === '') {
      setErrorMessage('Please enter a serial number.');
      setIsLoading(false);
    } else {
      //If input, query the DB via API path.
      setIsLoading(true);

      //Simulate call to API
      setTimeout(() => {
        if (searchValue === 'match') {
          history.push({ pathname: '/match', state: searchValue });
        } else if (searchValue !== 'match') {
          history.push({ pathname: '/nomatch', state: searchValue });
        }
      }, 4000);
      //Remove non-alphanumeric character.
      // let slugifiedSearchValue = slugify(searchValue);

      ///////////////////////////////////////////////////////
      ///// API CALL ////////////////////////////////////////
      ///////////////////////////////////////////////////////

      // props.history.push({
      //   pathname: '/register',
      //   state: data_you_need_to_pass
      //  });

      // if (match){
      //   history.push('/match');
      // } else {
      //   history.push('/nomatch')
      // }
    }
  };

  if (!isLoading) {
    return (
      <CenterContainer>
        <h1 className='display text-center my-5'>
          Has this equipment been stolen?
        </h1>
        {/* If no input, display message to user. Reset on input change. */}
        <h3
          className={`text-center mb-3 ${
            errorMessage ? 'text-red-600 animate-bounce' : ''
          }`}
        >
          {errorMessage === ''
            ? 'Enter the serial number below to find out!'
            : errorMessage}
        </h3>
        <div className='flex flex-col md:w-2/3 w-full items-center py-3 my-3'>
          <SearchInput handleChange={searchValueChange} />
          <div className='self-center my-3'>
            <Button
              variant='warning'
              title='Search'
              isLoading={isLoading}
              actionOnClick={queryDbWithInput}
            />
          </div>
        </div>
      </CenterContainer>
    );
  } else if (isLoading) {
    return (
      <CenterContainer>
        <div className='flex flex-col justify-center items-center'>
          <h2 className=' my-3 text-center'>
            We are checking if any entry match your request.
          </h2>
          <h3>{searchValue}</h3>
        </div>
        <div className='flex justify-center align-center my-4 mx-auto'>
          <Ring size={200} color='#02C19D' />
        </div>
      </CenterContainer>
    );
  } else {
    return <></>;
  }
};

export default Search;
