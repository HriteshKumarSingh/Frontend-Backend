import "dotenv/config";
import express from "express";

const user = [
  {
    id: 1,
    first_name: "Jessey",
    last_name: "McDuff",
    email: "jmcduff0@nymag.com",
    gender: "Male",
    company: "Tekfly",
    profile_image: "http://dummyimage.com/120x120.png/5fa2dd/ffffff",
  },
  {
    id: 2,
    first_name: "Thaddus",
    last_name: "Huitt",
    email: "thuitt1@ebay.co.uk",
    gender: "Male",
    company: "Youtags",
    profile_image: "http://dummyimage.com/120x120.png/5fa2dd/ffffff",
  },
  {
    id: 3,
    first_name: "Rea",
    last_name: "Bockings",
    email: "rbockings2@netvibes.com",
    gender: "Female",
    company: "Blogtag",
    profile_image: "http://dummyimage.com/120x120.png/5fa2dd/ffffff",
  },
  {
    id: 4,
    first_name: "Thorsten",
    last_name: "Hegden",
    email: "thegden3@oaic.gov.au",
    gender: "Male",
    company: "Topiczoom",
    profile_image: "http://dummyimage.com/120x120.png/dddddd/000000",
  },
  {
    id: 5,
    first_name: "Kerby",
    last_name: "Brookes",
    email: "kbrookes4@tmall.com",
    gender: "Male",
    company: "Youspan",
    profile_image: "http://dummyimage.com/120x120.png/ff4444/ffffff",
  },
  {
    id: 6,
    first_name: "Anders",
    last_name: "Pettigrew",
    email: "apettigrew5@apache.org",
    gender: "Male",
    company: "Quimm",
    profile_image: "http://dummyimage.com/120x120.png/dddddd/000000",
  },
  {
    id: 7,
    first_name: "Silvan",
    last_name: "Joselevitz",
    email: "sjoselevitz6@parallels.com",
    gender: "Male",
    company: "Thoughtsphere",
    profile_image: "http://dummyimage.com/120x120.png/5fa2dd/ffffff",
  },
  {
    id: 8,
    first_name: "Abbe",
    last_name: "Gaughan",
    email: "agaughan7@cnet.com",
    gender: "Female",
    company: "Gabtune",
    profile_image: "http://dummyimage.com/120x120.png/dddddd/000000",
  },
  {
    id: 9,
    first_name: "Bevon",
    last_name: "Franckton",
    email: "bftn8@chune.com",
    gender: "Male",
    company: "Browsebug",
    profile_image: "http://dummyimage.com/120x120.png/5fa2dd/ffffff",
  },
  {
    id: 10,
    first_name: "Rubin",
    last_name: "Fiddian",
    email: "rfiddian9@vk.com",
    gender: "Genderqueer",
    company: "Linktype",
    profile_image: "http://dummyimage.com/120x120.png/ff4444/ffffff",
  },
];

const app = express();
app.get('/api/users', (req, res) => {
  res.send(user)
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port :", process.env.PORT || 3000);
});