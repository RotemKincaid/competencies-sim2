const initialState = {
  name: "",
  address: "",
  city: "",
  houseState: "",
  zipcode: "",
  pic_url: "",
  monthlyMortgage: 0,
  desired: 0,
  listings: []
};

const NAME = "NAME";
const ADDRESS = "ADDRESS";
const CITY = "CITY";
const HOUSE_STATE = "HOUSE_STATE";
const ZIPCODE = "ZIPCODE";
const PIC_URL = "PIC_URL";
const MONTHLY_MORTGAGE = "MONTHLY_MORTGAGE";
const DESIRED = "DESIRED";

const SET_LISTING = "SET_LISTING";

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case NAME:
      return { ...state, name: payload };
    case ADDRESS:
      return { ...state, address: payload };
    case CITY:
      return { ...state, city: payload };
    case HOUSE_STATE:
      return { ...state, houseState: payload };
    case ZIPCODE:
      return { ...state, zipcode: payload };
    case PIC_URL:
      return { ...state, pic_url: payload };
    case MONTHLY_MORTGAGE:
      return { ...state, monthlyMortgage: payload };
    case DESIRED:
      return { ...state, desired: payload };

    case SET_LISTING:
      // const {
      //   name,
      //   address,
      //   city,
      //   houseState,
      //   zipcode,
      //   pic_url,
      //   monthlyMortgage,
      //   desired
      // } = state;
      // const listing = {
      //   name,
      //   address,
      //   city,
      //   houseState,
      //   zipcode,
      //   pic_url,
      //   monthlyMortgage,
      //   desired
      // };
      // const newListings = [...state.listings, listing];
      return { ...state, listing: payload };
    default:
      return state;
  }
}

export function setListing(listing) {
  return {
    type: SET_LISTING,
    payload: listing
  };
}
