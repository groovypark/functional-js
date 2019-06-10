// Functional construct #1: conditionally

// express if-else as a functional construct
export const conditionally = (config) => (props) => {
  return config.if(props) ?
    config.then(props) : config.else(props);
};

// normal if-else condition
function getCarConfig(car) {
  let description;
  let newPrice;

  if (car.rating > 4) {
    description = "good car";
    newPrice = car.price + 1000 * car.rating;
  } else {
    description = "bad car";
    newPrice = car.price;
  }
  
  return {
    description,
    newPrice,
  }
}

// conditionally
const hasGoodRating = rating => rating > 4;

const priceChange = conditionally({
  if: hasGoodRating,
  then: rating => 1000 * rating,
  else: () => 1000,
});

const getDescription = conditionally({
  if: hasGoodRating,
  then: () => "good car",
  else: () => "bad car",
});

function getCarCofig(car) {
  return {
    newPrice: priceChange(car.rating) + car.price,
    description: getDescription(car.rating)
  }
}


// Functional construct #2: tryCatch

// use try-catch
function setUserLanguageCode(selectedLanguage) {
  const languageCode = getLanguageCode(selectedLanguage);

  let storedSuccessfully;

  try {
    window.localStorage.setItem("LANG_CODE", languageCode);
    storedSuccessfully = true;
  } catch (e) {
    storedSuccessfully = false;
  }

  return {
    storedSuccessfully
  }
}

// 
export function tryCatch({
  tryer,
  catcher
}) {
  return (props) => {
    try {
      return tryer(props);
    } catch (e) {
      return catcher(props, e.message);
    }
  };
}

// 
const storeLanguageCode = tryCatch({
  tryer: (languageCode) => {
    window.localStorage.setItem("LANG_CODE", languageCode);
    return true;
  },
  catcher: (languageCode, errorMessage) => {
    logger.log(`${errorMessage} <-- happened while storing ${languageCode}`);
    return false;
  }
});

const setUserLanguageCode = pipe(
  getLanguageCode,
  languageCode => storeLanguageCode(langaugeCode), // or just storeLanguageCode
  storedSuccessfully => ({
    storedSuccessfully
  })
);
// setUserLanguageCode("en-US") will work as before.

// 참고 링크
// https://itnext.io/if-else-and-try-catch-as-functional-constructs-da5c6a749f8c