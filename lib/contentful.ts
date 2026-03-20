import * as contentful from "contentful";

const client = contentful.createClient({
  space: "51uyhrvqm8h4",
  environment: "master", // defaults to 'master' if not set
  accessToken: "uhT-QfcdE3mdyFxJrA70okbN2GEGzVf28SRhNgAuRxg",
});

client
  .getEntry("1ZUACUpBXnBnoVITgx9N1D")
  .then((entry) => console.log(entry))
  .catch(console.error);
