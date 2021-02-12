const CERTIFICATIONS = "Verified Certifications";
const TAGS = "Self-Generated Tags";
const RED_FLAGS = "Red Flags";
const S_VALUE = "Sustainability Value";
const E_VALUE = "Ethical Value";

// locates an item in the given array that matches the given item name
const findName = (itemName, array) => {
  return array.find((item) => item["Name"] === itemName);
};

// finds total sustainability and ethics scores
// for a particular array of tags OR certifications
const findTotals = (brandArray, fullArray) => {
  let sustainabilityValue = 0;
  let ethicalValue = 0;
  brandArray.map((tagName) => {
    if (tagName && tagName.length) {
      const tagInfo = findName(tagName, fullArray);
      console.log(tagInfo, tagName);
      sustainabilityValue = sustainabilityValue + tagInfo[S_VALUE];
      ethicalValue = ethicalValue = tagInfo[E_VALUE];
    }
  });
  return { sustainabilityValue, ethicalValue };
};


// finds the combined sustainability and ethical score for a
// brand
const gradeBrand = (brand) => {
  const brandCertifications = brand[CERTIFICATIONS].split(",");
  const brandTags = brand[TAGS].split(",");
  const brandCertificationGrades = findTotals(
    brandCertifications,
    certifications
  );
  const brandTagGrades = findTotals(brandTags, selfGenerated);
  return {
    name: brand["Name"],
    sustainabilityValue:
      brandCertificationGrades.sustainabilityValue +
      brandTagGrades.sustainabilityValue,
    ethicalValue:
      brandCertificationGrades.ethicalValue + brandTagGrades.ethicalValue,
  };
};

// grades all brands in an array
const gradeBrands = () => {
  return brands.map(gradeBrand).sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
};

const brands = [
  {
    Name: "& other stories",
    Website: "",
    "Verified Certifications": "Above 70% in Fashion Transparency Index",
    "Self-Generated Tags":
      "Organic Cotton,Policy to Prevent Deforestation of Ancient and Endangered Forests in its Supply Chain,Plan to Reduce Greenhouse Gas Emissions,Eco-friendly practices",
    "Red Flags": "Exotic Animal Skin/Fur",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women",
    "Key Products":
      "Casual Wear,Shoes,Bags,Jewelry,Accessories,Swimwear,Bras,Underwear,Activewear,Outerwear,Loungewear,Business Wear",
  },
  {
    Name: "A-dam",
    Website: "https://a-dam.com/",
    "Verified Certifications": "GOTS Certified organic cotton",
    "Self-Generated Tags":
      "High Proportion of Eco-Friendly Materials,Water Reduction Initiatives,vegan - no animal at all",
    "Red Flags": "",
    Price: "",
    "Owned By/Associated With": "",
    Category: "Men,Women,Kids",
    "Key Products": "Underwear,Bras,Loungewear,Sleepwear",
  },
  {
    Name: "A.P.C.",
    Website: "https://www.apc-us.com/",
    "Verified Certifications": "",
    "Self-Generated Tags": "Supports Accessibility,Recycles",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men,Home,Books",
    "Key Products": "Denim,Casual Wear,Bags,Accessories,Outerwear,Shoes",
  },
  {
    Name: "A|X Armani Exchange",
    Website: "https://www.armaniexchange.com/us",
    "Verified Certifications": "",
    "Self-Generated Tags":
      "Recycled Packaging,Does Not Use Fur/Exotic Animal Skins,Organic Cotton",
    "Red Flags": "Lack of Info",
    Price: "$$",
    "Owned By/Associated With": "Armani",
    Category: "Men,Women",
    "Key Products":
      "Casual Wear,Accessories,Bags,Jewelry,Swimwear,Sunglasses,Hats,Underwear",
  },
  {
    Name: "Abercromie & Fitch",
    Website: "https://www.abercrombie.com/shop/us",
    "Verified Certifications": "",
    "Self-Generated Tags": "Recycles,Plan to Reduce Greenhouse Gas Emissions",
    "Red Flags": "Low Fashion Transparency Index,Few Eco-Friendly Materials",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Men,Women,Kids",
    "Key Products": "Denim,Casual Wear,Accessories,Swimwear,Fragrance,Shoes",
  },
  {
    Name: "Acne Studios",
    Website: "https://www.acnestudios.com/",
    "Verified Certifications":
      "Fair Wear Foundation Member,Sweden Textile Initiative for Climate Action Member,Responsible Down Standard Accredited,American with Disabilities Act (ADA) Certified",
    "Self-Generated Tags":
      "Designed for longevity,Eco-friendly practices,Environmental Sustainability Plan,Recycle Remnants,Recycles,Living wages,Does Not Use Fur/Exotic Animal Skins",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men",
    "Key Products":
      "Outerwear,Business Wear,Casual Wear,Bags,Shoes,Jewelry,Denim,Swimwear",
  },
  {
    Name: "ADAY",
    Website: "https://www.thisisaday.com/",
    "Verified Certifications": "Bluesign Certified,Oeko Tex Certification",
    "Self-Generated Tags":
      "renewable energy,Recycle Remnants,Water Reduction Initiatives,Eco-friendly practices",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women",
    "Key Products":
      "Casual Wear,Loungewear,Bras,Swimwear,Accessories,Business Wear",
  },
  {
    Name: "Adidas",
    Website: "https://www.adidas.com/",
    "Verified Certifications":
      "FLA Workplace Code of Conduct,Better Cotton Initiative,Above 70% in Fashion Transparency Index",
    "Self-Generated Tags":
      "Recycled Materials,Environmental Sustainability Plan,Eco-friendly practices,Supports BLM,Community Outreach,Anti-Slavery and Human Trafficking Policy",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Men,Women,Kids",
    "Key Products": "Shoes,Activewear,Socks",
  },
  {
    Name: "Aerosoles",
    Website: "https://www.aerosoles.com/",
    "Verified Certifications": "American with Disabilities Act (ADA) Certified",
    "Self-Generated Tags": "",
    "Red Flags": "Lack of Info",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women",
    "Key Products": "Shoes",
  },
  {
    Name: "aldo",
    Website: "",
    "Verified Certifications": "",
    "Self-Generated Tags":
      "Plan to Reduce Greenhouse Gas Emissions,Working to Eliminate Hazardous Chemicals",
    "Red Flags": "Low Fashion Transparency Index,Few Eco-Friendly Materials",
    Price: "",
    "Owned By/Associated With": "aldo",
    Category: "Women",
    "Key Products": "Shoes,Accessories,Bags,Jewelry",
  },
  {
    Name: "Alex Evenings",
    Website: "https://alexevenings.com/",
    "Verified Certifications": "",
    "Self-Generated Tags": "Inclusive sizes",
    "Red Flags": "Lack of Info",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women",
    "Key Products": "Evening Wear",
  },
  {
    Name: "Alexander McQueen",
    Website: "https://www.alexandermcqueen.com/",
    "Verified Certifications": "American with Disabilities Act (ADA) Certified",
    "Self-Generated Tags":
      "Plan to Reduce Greenhouse Gas Emissions,Traces Most of Supply Chain,Anti-Slavery and Human Trafficking Policy,Policy to Prevent Deforestation of Ancient and Endangered Forests in its Supply Chain,Does Not Use Fur/Exotic Animal Skins",
    "Red Flags": "",
    Price: "$$$",
    "Owned By/Associated With": "Kering",
    Category: "Women,Men",
    "Key Products":
      "Casual Wear,Business Wear,Bags,Shoes,Accessories,Jewelry,Outerwear,Denim",
  },
  {
    Name: "Allsaints",
    Website: "https://www.us.allsaints.com/",
    "Verified Certifications": "Better Cotton Initiative,RWS Certified Wool",
    "Self-Generated Tags":
      "Environmental Sustainability Plan,Organic Cotton,Recycles,Recycled Materials,Support and promotes gender equality,Does Not Use Fur/Exotic Animal Skins,Anti-Slavery and Human Trafficking Policy",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men",
    "Key Products":
      "Outerwear,Bags,Casual Wear,Loungewear,Denim,Shoes,Accessories",
  },
  {
    Name: "allSisters",
    Website: "https://www.allsisters.com/",
    "Verified Certifications": "Oeko Tex Certification",
    "Self-Generated Tags":
      "High Proportion of Eco-Friendly Materials,Locally made,Traces Most of Supply Chain",
    "Red Flags": "Lack of Info",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women",
    "Key Products": "Swimwear,Activewear",
  },
  {
    Name: "Alternative Apparel",
    Website: "https://www.alternativeapparel.com/",
    "Verified Certifications": "Fair Labor Association,Green Certified",
    "Self-Generated Tags": "Eco-friendly practices",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men,Home,Bath/Body",
    "Key Products": "Casual Wear,Loungewear,Bags,Hats,Outerwear,Accessories",
  },
  {
    Name: "Amazon",
    Website: "https://www.amazon.com/",
    "Verified Certifications": "",
    "Self-Generated Tags":
      "renewable energy,Does Not Use Fur/Exotic Animal Skins,Supports Charities",
    "Red Flags":
      "No Labor Standard Certifications,Low Fashion Transparency Index,Tax Avoidance,Mistreats Workers,Does Not Limit Toxic Chemicals in Production,Wasteful Packaging",
    Price: "$",
    "Owned By/Associated With": "",
    Category: "All",
    "Key Products": "All of the Above",
  },
  {
    Name: "American Apparel",
    Website: "https://americanapparel.com/",
    "Verified Certifications":
      "GOTS Certified organic cotton,Fair Labor Association",
    "Self-Generated Tags":
      "Recycle Remnants,Organic Cotton,Ethical Supply Chain,LGBTQ+ Allyship,Community Outreach,Does Not Use Fur/Exotic Animal Skins,Above-Minimum Wages,Sustainable Cotton,Eco-friendly practices",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men",
    "Key Products":
      "Casual Wear,Outerwear,Denim,Hats,Bags,Bras,Underwear,Loungewear,Socks",
  },
  {
    Name: "Amour Vert",
    Website:
      "https://amourvert.com/?utm_source=google&utm_medium=cpc&utm_term=amour%20vert&utm_campaign=g_search_brand_NCA_exact&utm_content=397208962766&gclid=CjwKCAiA17P9BRB2EiwAMvwNyAHqS2_f9g6orN3z9rORbX-ba4MCR7EpTmqpTuTui0fztjO769RhkRoCQ4cQAvD_BwE",
    "Verified Certifications": "GOTS Certified organic cotton",
    "Self-Generated Tags":
      "Locally made,Limited Amount of Chemicals and Wastewater Used in Production,Most Production Undertaken in USA,Eco-friendly practices",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women",
    "Key Products": "Casual Wear,Loungewear,Denim,Shoes,Bags,Jewelry",
  },
  {
    Name: "Andrew Marc",
    Website: "https://www.andrewmarc.com/",
    "Verified Certifications": "",
    "Self-Generated Tags":
      "Anti-Slavery and Human Trafficking Policy,Supports Accessibility",
    "Red Flags": "Lack of Info,Low Fashion Transparency Index",
    Price: "$$",
    "Owned By/Associated With": "Donna Karan Company",
    Category: "Women,Men",
    "Key Products": "Outerwear,Activewear",
  },
  {
    Name: "Ann Taylor",
    Website: "https://www.anntaylor.com/",
    "Verified Certifications": "",
    "Self-Generated Tags":
      "Eco-friendly practices,Recycles,Supports Charities,Does Not Use Fur/Exotic Animal Skins",
    "Red Flags": "Low Fashion Transparency Index,Lack of Info",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women",
    "Key Products":
      "Casual Wear,Denim,Business Wear,Outerwear,Loungewear,Shoes,Jewelry,Accessories,Socks",
  },
  {
    Name: "Anne Klein",
    Website: "https://anneklein.com/",
    "Verified Certifications": "American with Disabilities Act (ADA) Certified",
    "Self-Generated Tags":
      "Community Outreach,Supports Accessibility,Woman Leadership",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women",
    "Key Products": "Business Wear,Jewelry,Bags,Shoes",
  },
  {
    Name: "Anthropologie",
    Website:
      "https://www.anthropologie.com/?utm_medium=paid_search&utm_source=Google&utm_content=US_-_Brand_-_anthropologie_-_Exact&utm_term=anthropologie&utm_campaign=US_-_Brand_-_Exact_-_Top_Traffic&creative=476938909856&device=c&matchtype=e&network=g&gclid=CjwKCAiA17P9BRB2EiwAMvwNyKUVS3ocBoKbsNHqynPDPQ57PSAx6CGWBwmiD2-X8fTkOMD5JYV-khoC2UwQAvD_BwE&gclsrc=aw.ds",
    "Verified Certifications": "",
    "Self-Generated Tags": "renewable energy",
    "Red Flags": "Lack of Info,Low Fashion Transparency Index",
    Price: "$$",
    "Owned By/Associated With": "allSisters",
    Category: "Women,Home,Bath/Body",
    "Key Products":
      "Casual Wear,Loungewear,Accessories,Denim,Fragrance,Outerwear,Bags,Jewelry,Shoes,Bras,Underwear",
  },
  {
    Name: "ARIELLE",
    Website: "https://shop-arielle.com/",
    "Verified Certifications": "",
    "Self-Generated Tags":
      "High Proportion of Eco-Friendly Materials,Organic Cotton,Locally made,Limited Amount of Chemicals and Wastewater Used in Production,Recycled Materials,good animal rating,Does Not Use Fur/Exotic Animal Skins",
    "Red Flags": "Lack of Info",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men",
    "Key Products": "Casual Wear,Accessories,Outerwear,Swimwear,Business Wear",
  },
  {
    Name: "Aritzia",
    Website: "https://www.aritzia.com/",
    "Verified Certifications": "",
    "Self-Generated Tags": "Eco-friendly practices",
    "Red Flags": "Low Fashion Transparency Index,Lack of Info",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women",
    "Key Products": "Outerwear,Business Wear,Casual Wear,Denim,Hats,Socks",
  },
  {
    Name: "Armani",
    Website: "https://www.armani.com/",
    "Verified Certifications": "",
    "Self-Generated Tags":
      "Recycled Packaging,Does Not Use Fur/Exotic Animal Skins,Uses Solar Power,Chitosan,Organic Cotton,Zero Liquid Discharge Practices,Restricted Substance List,Eco-friendly practices,Community Outreach",
    "Red Flags": "Low Fashion Transparency Index",
    Price: "$$$",
    "Owned By/Associated With": "",
    Category: "Women,Men,Kids,Home,Bath/Body",
    "Key Products":
      "Business Wear,Evening Wear,Outerwear,Casual Wear,Shoes,Bags,Accessories,Jewelry",
  },
  {
    Name: "ASOS",
    Website: "www.asos.com",
    "Verified Certifications":
      "Cotton Made in Africa Participant,Better Cotton Initiative,U.N. Global Compact Signatory,Five Freedoms",
    "Self-Generated Tags":
      "Organic Cotton,Environmental Sustainability Plan,Plan to Reduce Greenhouse Gas Emissions,Natural and Sustainable Materials,Does Not Use Fur/Exotic Animal Skins,LGBTQ+ Allyship,Supports Accessibility,Traces Most of Supply Chain,Living wages,Anti-Slavery and Human Trafficking Policy,Community Outreach,Restricted Substance List,Formal Statement Covering Workers Rights,Supports Charities",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men,Bath/Body",
    "Key Products": "Casual Wear,Denim,Activewear,Shoes,Outerwear,Swimwear",
  },
  {
    Name: "Athleta",
    Website: "https://athleta.gap.com/",
    "Verified Certifications":
      "Fair Trade Certified,B Corp Certified,'A' in the Carbon Disclosure Project (CDP) water security questionnaire",
    "Self-Generated Tags":
      "Plan to Reduce Greenhouse Gas Emissions,Eco-friendly practices",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "Gap Inc.",
    Category: "Women,Kids",
    "Key Products":
      "Activewear,Casual Wear,Swimwear,Bras,Denim,Outerwear,Bags,Socks",
  },
  {
    Name: "Aventura",
    Website: "https://aventuraclothing.com/",
    "Verified Certifications": "Fair Trade Certified",
    "Self-Generated Tags":
      "Environmental Sustainability,Organic Cotton,Recycled Materials,Policy to Prevent Deforestation of Ancient and Endangered Forests in its Supply Chain,Supports Charities",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men",
    "Key Products": "Casual Wear,Outerwear,Activewear,Accessories",
  },
  {
    Name: "Back Beat Co.",
    Website: "https://backbeat.co/",
    "Verified Certifications": "GOTS Certified organic cotton",
    "Self-Generated Tags":
      "Made in USA,Environmental Sustainability,Recycled Packaging,Recyclable Packaging",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women",
    "Key Products": "Casual Wear,Outerwear,Accessories,Bras",
  },
  {
    Name: "Balenciaga",
    Website: "www.balenciaga.com",
    "Verified Certifications": "",
    "Self-Generated Tags":
      "Supports Charities,Plan to Reduce Greenhouse Gas Emissions,Environmental Sustainability Plan",
    "Red Flags": "Exotic Animal Skin/Fur",
    Price: "$$$",
    "Owned By/Associated With": "Kering",
    Category: "Women,Men,Kids",
    "Key Products": "Shoes,Bags,Accessories,Casual Wear,Denim,Outerwear",
  },
  {
    Name: "BEEN London",
    Website: "https://been.london/",
    "Verified Certifications": "",
    "Self-Generated Tags":
      "High Proportion of Eco-Friendly Materials,Recycled Materials,Locally made,Recycled Packaging,Water Reduction Initiatives,Traces Most of Supply Chain,Does Not Use Fur/Exotic Animal Skins",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women",
    "Key Products": "Bags,Accessories",
  },
  {
    Name: "Bershka",
    Website: "https://www.bershka.com/us/women-c1010193132.html",
    "Verified Certifications": "",
    "Self-Generated Tags": "Recycled Packaging",
    "Red Flags": "Lack of Info,Few Eco-Friendly Materials",
    Price: "$",
    "Owned By/Associated With": "",
    Category: "Women",
    "Key Products":
      "Casual Wear,Denim,Shoes,Accessories,Outerwear,Bags,Loungewear",
  },
  {
    Name: "Beyond Yoga",
    Website: "https://beyondyoga.com/",
    "Verified Certifications":
      "Certified by Worldwide Responsible Accredited Production",
    "Self-Generated Tags": "Inclusive sizes",
    "Red Flags": "Lack of Info",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Maternity",
    "Key Products": "Activewear,Casual Wear,Sleepwear,Bras",
  },
  {
    Name: "Birkenstock",
    Website: "birkenstock.com",
    "Verified Certifications": "",
    "Self-Generated Tags":
      "Limited Amount of Chemicals and Wastewater Used in Production",
    "Red Flags":
      "Lack of Info,Mistreats Animals,Does Not Use Eco-Friendly Materials",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men,Kids",
    "Key Products": "Shoes,Socks",
  },
  {
    Name: "bleed",
    Website: "https://www.bleed-clothing.com/",
    "Verified Certifications":
      "GOTS Certified organic cotton,Code of Conduct covers the ILO Four Fundamental Freedoms principles",
    "Self-Generated Tags":
      "High Proportion of Eco-Friendly Materials,Water Reduction Initiatives,Traces Most of Supply Chain,Living wages,vegan - no animal at all",
    "Red Flags": "",
    Price: "",
    "Owned By/Associated With": "",
    Category: "Men,Women",
    "Key Products":
      "Outerwear,Casual Wear,Denim,Swimwear,Shoes,Socks,Bags,Hats",
  },
  {
    Name: "Bottega Veneta",
    Website: "www.bottegaveneta.com",
    "Verified Certifications": "",
    "Self-Generated Tags":
      "Plan to Reduce Greenhouse Gas Emissions,Traces Most of Supply Chain,Environmental Sustainability Plan",
    "Red Flags": "Exotic Animal Skin/Fur",
    Price: "$$$",
    "Owned By/Associated With": "Kering",
    Category: "Women,Men",
    "Key Products": "Casual Wear,Evening Wear,Business Wear,Bags,Shoes,Jewelry",
  },
  {
    Name: "Brioni",
    Website: "www.brioni.com",
    "Verified Certifications": "",
    "Self-Generated Tags":
      "Plan to Reduce Greenhouse Gas Emissions,Traces Most of Supply Chain,Environmental Sustainability Plan,Does Not Use Fur/Exotic Animal Skins",
    "Red Flags": "",
    Price: "$$$",
    "Owned By/Associated With": "Kering",
    Category: "Men",
    "Key Products": "Business Wear,Shoes,Outerwear,Accessories,Jewelry",
  },
  {
    Name: "C&A",
    Website: "www.c-and-a.com",
    "Verified Certifications":
      "GOTS Certified organic cotton,Above 70% in Fashion Transparency Index",
    "Self-Generated Tags":
      "Plan to Reduce Greenhouse Gas Emissions,Water Reduction Initiatives,Working to Eliminate Hazardous Chemicals,Eco-friendly practices",
    "Red Flags": "",
    Price: "$",
    "Owned By/Associated With": "",
    Category: "Women,Men,Kids,Babies,Maternity",
    "Key Products":
      "Casual Wear,Sleepwear,Denim,Underwear,Outerwear,Loungewear,Activewear,Business Wear,Socks,Swimwear",
  },
  {
    Name: "Calvin Klein",
    Website:
      "https://www.calvinklein.us/en?camp=ppc_google_TM_Brand_Calvin+Klein+TM+Exact_Calvin+Klein+Exact_p43713533741&gclid=CjwKCAiA17P9BRB2EiwAMvwNyBE8rUKD4JU8G5IAzH_DY9Cmk8vXYIc3_Hb_WR7Rj2CAUML_koT_TRoCSsMQAvD_BwE&gclsrc=aw.ds",
    "Verified Certifications":
      "CanopyStyle Approved Policy,Some Supply Chain Certified by FLA Workplace Code of Conduct,Responsible Down Standard Accredited",
    "Self-Generated Tags": "Eco-friendly practices",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "Passion Lilie",
    Category: "Women,Men,Kids",
    "Key Products":
      "Casual Wear,Business Wear,Underwear,Bras,Socks,Jewelry,Swimwear,Outerwear,Activewear,Loungewear,Sleepwear,Accessories",
  },
  {
    Name: "Canada Goose",
    Website:
      "https://www.canadagoose.com/us/en/home-page?agp=56319260346&cmpid=1460237670&country=&cre=471443545434&gclid=CjwKCAiA17P9BRB2EiwAMvwNyC7jUe20TP8o6LALDwgKTnChoyR_iOC1OBRuBHv1SeihJEW6DJxhxhoCu5gQAvD_BwE&gclsrc=aw.ds&kid=canadagoose&medium=cpc&merchant_id=&mtype=e&pla=&product_id=&source=google",
    "Verified Certifications": "",
    "Self-Generated Tags": "",
    "Red Flags":
      "Does Not Use Eco-Friendly Materials,Low Fashion Transparency Index,Lack of Info",
    Price: "$$$",
    "Owned By/Associated With": "",
    Category: "Women,Men,Kids",
    "Key Products": "Outerwear,Hats,Accessories",
  },
  {
    Name: "CasaGIN",
    Website: "https://www.casagin.com/",
    "Verified Certifications": "",
    "Self-Generated Tags":
      "High Proportion of Eco-Friendly Materials,Locally made,Formal Statement Covering Workers Rights",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men",
    "Key Products":
      "Activewear,Underwear,Loungewear,Swimwear,Casual Wear,Socks,Sleepwear,Bras",
  },
  {
    Name: "Champion",
    Website: "champion.com",
    "Verified Certifications":
      "Some Supply Chain Certified by FLA Workplace Code of Conduct",
    "Self-Generated Tags":
      "Plan to Reduce Greenhouse Gas Emissions,minimise textile waste",
    "Red Flags": "Few Eco-Friendly Materials",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men,Kids",
    "Key Products":
      "Activewear,Shoes,Bras,Underwear,Socks,Sleepwear,Bags,Accessories",
  },
  {
    Name: "chanel",
    Website: "",
    "Verified Certifications": "",
    "Self-Generated Tags": "Plan to Reduce Greenhouse Gas Emissions",
    "Red Flags":
      "Lack of Info,Low Fashion Transparency Index,Exotic Animal Skin/Fur,Mistreats Animals,Does Not Use Eco-Friendly Materials",
    Price: "$$$",
    "Owned By/Associated With": "",
    Category: "Women,Men,Bath/Body",
    "Key Products":
      "Bags,Makeup,Fragrance,Jewelry,Business Wear,Casual Wear,Outerwear",
  },
  {
    Name: "Citizen Wolf",
    Website: "https://www.citizenwolf.com/",
    "Verified Certifications":
      "GOTS Certified organic cotton,Ethical Clothing Australia",
    "Self-Generated Tags":
      "High Proportion of Eco-Friendly Materials,Locally made,Water Reduction Initiatives,Living wages,Traces Most of Supply Chain,wool from non-mulesed sheep,Does Not Use Fur/Exotic Animal Skins,good animal rating",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men",
    "Key Products": "Casual Wear,Accessories",
  },
  {
    Name: "Cloe Cassandro",
    Website: "https://www.cloecassandro.com/",
    "Verified Certifications": "GOTS Certified organic cotton",
    "Self-Generated Tags":
      "Organic Cotton,Hand-crafted,Traces Most of Supply Chain,Living wages,good animal rating,Eco-friendly practices",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women",
    "Key Products": "Swimwear,Casual Wear",
  },
  {
    Name: "Club Monaco",
    Website: "https://www.clubmonaco.com/",
    "Verified Certifications": "",
    "Self-Generated Tags": "",
    "Red Flags":
      "Low Fashion Transparency Index,Lack of Info,Few Eco-Friendly Materials",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Men,Women",
    "Key Products":
      "Casual Wear,Business Wear,Outerwear,Denim,Swimwear,Shoes,Socks,Bags,Accessories",
  },
  {
    Name: "Columbia",
    Website: "",
    "Verified Certifications": "Bluesign Certified",
    "Self-Generated Tags":
      "Recycled Materials,good animal rating,Plan to Reduce Greenhouse Gas Emissions",
    "Red Flags": "Lack of Info",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men,Kids",
    "Key Products":
      "Outerwear,Shoes,Activewear,Hats,Socks,Underwear,Bras,Casual Wear",
  },
  {
    Name: "converse",
    Website: "",
    "Verified Certifications": "",
    "Self-Generated Tags":
      "Recycled Materials,Plan to Reduce Greenhouse Gas Emissions,Water Reduction Initiatives,Eco-friendly practices",
    "Red Flags": "Mistreats Animals",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Men,Women,Kids",
    "Key Products": "Shoes,Casual Wear,Hats,Socks,Bags",
  },
  {
    Name: "Costco",
    Website: "costco.com",
    "Verified Certifications":
      "High Corporate Equality Index Score,Oeko Tex Certification,Bluesign Certified",
    "Self-Generated Tags":
      "Supports Charities,Living wages,Anti-Slavery and Human Trafficking Policy,Uses Solar Power",
    "Red Flags": "",
    Price: "",
    "Owned By/Associated With": "",
    Category: "Men,Women,Kids",
    "Key Products":
      "Outerwear,Casual Wear,Loungewear,Shoes,Socks,Swimwear,Sleepwear,Accessories,Underwear,Denim",
  },
  {
    Name: "Dazey LA",
    Website: "https://www.dazeyla.com/",
    "Verified Certifications": "",
    "Self-Generated Tags":
      "Organic Cotton,Locally made,Made to Order,Formal Statement Covering Workers Rights,Living wages,Traces Most of Supply Chain,good animal rating,Eco-friendly practices",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women",
    "Key Products":
      "Casual Wear,Business Wear,Activewear,Swimwear,Outerwear,Jewelry,Accessories,Hats,Shoes",
  },
  {
    Name: "dk active",
    Website: "https://www.dkactive.com/",
    "Verified Certifications": "",
    "Self-Generated Tags":
      "Organic Cotton,renewable energy,Traces Most of Supply Chain,vegan - no animal at all,Eco-friendly practices",
    "Red Flags": "",
    Price: "",
    "Owned By/Associated With": "",
    Category: "Women,Maternity,Men",
    "Key Products": "Activewear,Casual Wear,Bras,Accessories",
  },
  {
    Name: "DKNY",
    Website: "https://www.donnakaran.com/category/dkny.do",
    "Verified Certifications": "",
    "Self-Generated Tags": "Supports Accessibility",
    "Red Flags": "Lack of Info,Low Fashion Transparency Index",
    Price: "$$",
    "Owned By/Associated With": "Donna Karan Company",
    Category: "Women,Men",
    "Key Products":
      "Business Wear,Casual Wear,Bags,Shoes,Underwear,Bras,Outerwear,Sleepwear,Activewear,Denim,Fragrance",
  },
  {
    Name: "Donna Karan Company",
    Website: "https://www.donnakaran.com/",
    "Verified Certifications": "",
    "Self-Generated Tags":
      "Supports Accessibility,Does Not Use Fur/Exotic Animal Skins",
    "Red Flags": "Lack of Info,Low Fashion Transparency Index",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Home",
    "Key Products":
      "Business Wear,Evening Wear,Outerwear,Shoes,Accessories,Fragrance",
  },
  {
    Name: "Ecco",
    Website: "https://us.ecco.com/",
    "Verified Certifications": "",
    "Self-Generated Tags": "",
    "Red Flags": "Lack of Info,Does Not Use Eco-Friendly Materials",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Men,Women",
    "Key Products": "Shoes,Bags,Socks,Accessories",
  },
  {
    Name: "Ecoalf",
    Website: "https://ecoalf.com/es/",
    "Verified Certifications":
      "Code of Conduct covers the ILO Four Fundamental Freedoms principles",
    "Self-Generated Tags":
      "Recycled Materials,Recycled Packaging,High Proportion of Eco-Friendly Materials,Limited Amount of Chemicals and Wastewater Used in Production,Traces Most of Supply Chain",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men,Kids",
    "Key Products": "Activewear,Outerwear,Casual Wear,Shoes,Bags,Accessories",
  },
  {
    Name: "Eileen Fisher",
    Website: "https://www.eileenfisher.com/?country=US&currency=USD",
    "Verified Certifications":
      "Fair Trade Certified,B Corp Certified,Ethical Trade Initiative Member,Tanneries Audited by the Leather Working Group",
    "Self-Generated Tags":
      "Plan to Reduce Greenhouse Gas Emissions,Recycle Remnants,Traces Most of Supply Chain,Eco-friendly practices",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women",
    "Key Products": "Casual Wear,Outerwear,Denim,Sleepwear,Shoes",
  },
  {
    Name: "Elle Evans",
    Website: "https://www.elleevansswimwear.com.au/",
    "Verified Certifications": "",
    "Self-Generated Tags":
      "High Proportion of Eco-Friendly Materials,Recycled Materials,Locally made,Traces Most of Supply Chain,Living wages",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women",
    "Key Products": "Swimwear,Activewear,Bras",
  },
  {
    Name: "Everlane",
    Website: "https://www.everlane.com/",
    "Verified Certifications": "",
    "Self-Generated Tags": "Recycled Materials,Eco-friendly practices",
    "Red Flags": "Lack of Info",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men",
    "Key Products":
      "Casual Wear,Denim,Outerwear,Activewear,Bras,Shoes,Bags,Accessories",
  },
  {
    Name: "FH Christensen",
    Website: "http://fhchristensen.london/",
    "Verified Certifications": "",
    "Self-Generated Tags":
      "Locally made,Traces Most of Supply Chain,Does Not Use Fur/Exotic Animal Skins",
    "Red Flags": "Does Not Use Eco-Friendly Materials",
    Price: "$$$",
    "Owned By/Associated With": "",
    Category: "Women",
    "Key Products": "Evening Wear,Business Wear",
  },
  {
    Name: "Forever 21",
    Website:
      "https://www.forever21.com/?gclsrc=aw.ds&%243p=a_google_adwords&%24always_deeplink=false&lpurl=https%3A%2F%2Fwww.forever21.com%2Fus%2Fshop%3Fgclsrc%3Daw.ds%26&~ad_set_id=31021360278&~campaign_id=635987929&~channel=g&~keyword=forever%2021&~placement=&%24fallback_url=https%3A%2F%2Fwww.forever21.com%2Fus%2Fshop%3Fgclsrc%3Daw.ds%26&~campaign=&gclid=CjwKCAiA17P9BRB2EiwAMvwNyKmjAslk-iLoHuOAjmIGWBBMjfjm9iGjqLE9lQ3L_tTA5rNfxKuFLhoCNpwQAvD_BwE&gclid=CjwKCAiA17P9BRB2EiwAMvwNyKmjAslk-iLoHuOAjmIGWBBMjfjm9iGjqLE9lQ3L_tTA5rNfxKuFLhoCNpwQAvD_BwE&_branch_match_id=458991857115570203&utm_source=g",
    "Verified Certifications": "",
    "Self-Generated Tags": "",
    "Red Flags":
      "Low Fashion Transparency Index,Exotic Animal Skin/Fur,Lack of Info,Fast Fashion",
    Price: "$",
    "Owned By/Associated With": "",
    Category: "Women,Men",
    "Key Products":
      "Casual Wear,Denim,Outerwear,Activewear,Loungewear,Bras,Underwear,Jewelry,Shoes,Accessories",
  },
  {
    Name: "Francesca's",
    Website: "",
    "Verified Certifications": "",
    "Self-Generated Tags": "",
    "Red Flags": "Lack of Info",
    Price: "$",
    "Owned By/Associated With": "",
    Category: "Women",
    "Key Products":
      "Casual Wear,Jewelry,Bags,Shoes,Denim,Loungewear,Activewear",
  },
  {
    Name: "Ganni",
    Website: "www.ganni.com",
    "Verified Certifications": "GOTS Certified organic cotton",
    "Self-Generated Tags": "Eco-friendly practices",
    "Red Flags": "Lack of Info,Mistreats Animals",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women",
    "Key Products":
      "Bags,Shoes,Loungewear,Casual Wear,Business Wear,Bras,Underwear,Swimwear,Outerwear,Jewelry,Socks,Accessories",
  },
  {
    Name: "Gap Inc.",
    Website:
      "https://www.gap.com/?tid=gpps021874&kwid=1&ap=7&gclid=CjwKCAiA17P9BRB2EiwAMvwNyMAXd-M_WppcQAZ3gmRLg1UAsj-hqhXegjLqPvd_3XeGk-Ek_fAYAhoC2MkQAvD_BwE&gclsrc=aw.ds",
    "Verified Certifications":
      "'A' in the Carbon Disclosure Project (CDP) water security questionnaire",
    "Self-Generated Tags": "Recycled Materials,Eco-friendly practices",
    "Red Flags": "Low Fashion Transparency Index",
    Price: "$$",
    "Owned By/Associated With": "Gap Inc.",
    Category: "Women,Men,Kids,Maternity",
    "Key Products":
      "Denim,Casual Wear,Business Wear,Outerwear,Activewear,Shoes,Accessories,Swimwear",
  },
  {
    Name: "Gucci",
    Website: "www.gucci.com",
    "Verified Certifications":
      "Some Supply Chain Certified by Social Accountability International",
    "Self-Generated Tags":
      "Plan to Reduce Greenhouse Gas Emissions,Traces Most of Supply Chain,Environmental Sustainability Plan",
    "Red Flags": "Exotic Animal Skin/Fur",
    Price: "$$$",
    "Owned By/Associated With": "Kering",
    Category: "Women,Men",
    "Key Products":
      "Bags,Shoes,Business Wear,Casual Wear,Outerwear,Denim,Activewear,Bras,Underwear,Swimwear",
  },
  {
    Name: "Gymshark",
    Website: "https://row.gymshark.com/",
    "Verified Certifications":
      "Code of Conduct covers the ILO Four Fundamental Freedoms principles",
    "Self-Generated Tags": "Recycled Packaging,vegan - no animal at all",
    "Red Flags": "Lack of Info,Few Eco-Friendly Materials",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men",
    "Key Products": "Activewear,Swimwear,Underwear,Bags,Accessories",
  },
  {
    Name: "H&M",
    Website: "https://www2.hm.com/en_us/index.html",
    "Verified Certifications":
      "CanopyStyle Approved Policy,Responsible Down Standard Accredited",
    "Self-Generated Tags": "Eco-friendly practices",
    "Red Flags": "Fast Fashion",
    Price: "$",
    "Owned By/Associated With": "Citizen Wolf",
    Category: "Women,Men,Maternity",
    "Key Products":
      "Casual Wear,Business Wear,Denim,Sleepwear,Loungewear,Shoes,Activewear,Swimwear,Bras,Underwear,Socks,Accessories",
  },
  {
    Name: "Hollister",
    Website: "",
    "Verified Certifications": "",
    "Self-Generated Tags":
      "Recycled Materials,Plan to Reduce Greenhouse Gas Emissions,Eco-friendly practices",
    "Red Flags": "Low Fashion Transparency Index",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men",
    "Key Products":
      "Casual Wear,Loungewear,Outerwear,Swimwear,Denim,Fragrance,Shoes,Bras,Underwear,Sleepwear",
  },
  {
    Name: "Howies",
    Website: "https://www.howies.co.uk/",
    "Verified Certifications":
      "GOTS Certified organic cotton,Code of Conduct covers the ILO Four Fundamental Freedoms principles",
    "Self-Generated Tags":
      "High Proportion of Eco-Friendly Materials,Organic Cotton,Limited Amount of Chemicals and Wastewater Used in Production,Living wages,Traces Most of Supply Chain,Does Not Use Fur/Exotic Animal Skins,wool from non-mulesed sheep",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men",
    "Key Products": "Casual Wear,Denim,Underwear,Socks,Accessories",
  },
  {
    Name: "Intermix",
    Website: "https://www.intermixonline.com/",
    "Verified Certifications":
      "Sustainable Apparel Coalition,Ethical Trade Initiative Member",
    "Self-Generated Tags":
      "Water Reduction Initiatives,Living wages,Traces Most of Supply Chain,Fair Trade",
    "Red Flags": "Does Not Use Eco-Friendly Materials,Uses Leather and Wool",
    Price: "$$$",
    "Owned By/Associated With": "Gap Inc.",
    Category: "Women",
    "Key Products":
      "Casual Wear,Activewear,Outerwear,Denim,Underwear,Swimwear,Loungewear,Bras,Bags,Shoes,Evening Wear,Business Wear",
  },
  {
    Name: "J.crew",
    Website: "https://www.jcrew.com/",
    "Verified Certifications": "Fair Trade Certified",
    "Self-Generated Tags": "",
    "Red Flags": "Low Fashion Transparency Index,Mistreats Animals",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Men,Women,Kids,Maternity,Home",
    "Key Products":
      "Business Wear,Casual Wear,Loungewear,Sleepwear,Swimwear,Denim,Outerwear,Shoes,Bags,Socks,Accessories,Jewelry",
  },
  {
    Name: "jimmy choo",
    Website: "https://www.jimmychoo.com",
    "Verified Certifications":
      "Code of Conduct covers the ILO Four Fundamental Freedoms principles",
    "Self-Generated Tags": "Greenhouse Gas Reductions",
    "Red Flags": "Lack of Info,Exotic Animal Skin/Fur",
    Price: "$$$",
    "Owned By/Associated With": "",
    Category: "Women,Men",
    "Key Products": "Shoes,Bags,Accessories,Fragrance,Casual Wear",
  },
  {
    Name: "Kering",
    Website: "https://www.kering.com/",
    "Verified Certifications": "Fashion Pact Member",
    "Self-Generated Tags":
      "Plan to Reduce Greenhouse Gas Emissions,Environmental Sustainability Plan,Traces Most of Supply Chain,Does Not Use Fur/Exotic Animal Skins,Policy to Prevent Deforestation of Ancient and Endangered Forests in its Supply Chain,Supports Charities",
    "Red Flags": "",
    Price: "$$$",
    "Owned By/Associated With": "",
    Category: "Parent Company",
    "Key Products": "",
  },
  {
    Name: "Kowtow",
    Website: "https://nz.kowtowclothing.com/",
    "Verified Certifications": "Facilities are certified by SA8000",
    "Self-Generated Tags":
      "High Proportion of Eco-Friendly Materials,Organic Cotton,Earth-friendly dyes,Water Reduction Initiatives,Living wages,Does Not Use Fur/Exotic Animal Skins",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women",
    "Key Products":
      "Casual Wear,Denim,Outerwear,Swimwear,Sleepwear,Accessories,Socks",
  },
  {
    Name: "la fille d'O",
    Website: "https://lafilledo.com/",
    "Verified Certifications": "Oeko Tex Certification",
    "Self-Generated Tags":
      "Locally made,Living wages,Traces Most of Supply Chain",
    "Red Flags": "Does Not Use Eco-Friendly Materials",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women",
    "Key Products": "Bras,Underwear",
  },
  {
    Name: "Levis",
    Website:
      "https://www.levi.com/US/en_US/?utm_source=GoodOnYou%20App&utm_medium=Referral",
    "Verified Certifications": "",
    "Self-Generated Tags":
      "Recycled Materials,Plan to Reduce Greenhouse Gas Emissions,Water Reduction Initiatives,Working to Eliminate Hazardous Chemicals,Eco-friendly practices",
    "Red Flags": "Mistreats Animals",
    Price: "$$",
    "Owned By/Associated With": "Vege Threads",
    Category: "Women,Men,Kids",
    "Key Products": "Denim,Outerwear,Casual Wear,Bras,Underwear,Accessories",
  },
  {
    Name: "LOCAL EUROPEAN",
    Website: "https://localeuropean.com/",
    "Verified Certifications": "",
    "Self-Generated Tags":
      "High Proportion of Eco-Friendly Materials,Recycled Materials,Locally made,Limited Amount of Chemicals and Wastewater Used in Production",
    "Red Flags": "Lack of Info",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women",
    "Key Products": "Casual Wear,Swimwear",
  },
  {
    Name: "LONDRĖ",
    Website: "https://londrebodywear.com/",
    "Verified Certifications": "Oeko Tex Certification",
    "Self-Generated Tags":
      "Recycled Materials,Locally made,Limited Amount of Chemicals and Wastewater Used in Production,Traces Most of Supply Chain",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women",
    "Key Products": "Swimwear,Casual Wear",
  },
  {
    Name: "lululemon",
    Website: "https://shop.lululemon.com/",
    "Verified Certifications": "",
    "Self-Generated Tags": "",
    "Red Flags": "Lack of Info,Mistreats Animals,Few Eco-Friendly Materials",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men",
    "Key Products":
      "Activewear,Casual Wear,Outerwear,Loungewear,Bras,Swimwear,Underwear,Socks,Bags,Hats",
  },
  {
    Name: "Madewell",
    Website: "https://www.madewell.com/",
    "Verified Certifications": "",
    "Self-Generated Tags": "",
    "Red Flags": "Lack of Info,Low Fashion Transparency Index",
    Price: "$$",
    "Owned By/Associated With": "J.crew",
    Category: "Women,Men,Maternity",
    "Key Products":
      "Denim,Casual Wear,Shoes,Outerwear,Activewear,Loungewear,Swimwear,Bags,Jewelry,Hats,Socks",
  },
  {
    Name: "mango",
    Website: "",
    "Verified Certifications": "",
    "Self-Generated Tags": "Eco-friendly practices",
    "Red Flags":
      "Lack of Info,Low Fashion Transparency Index,Exotic Animal Skin/Fur,Mistreats Animals",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men,Kids",
    "Key Products":
      "Outerwear,Casual Wear,Business Wear,Denim,Underwear,Bras,Shoes,Bags,Jewelry,Hats,Swimwear,Accessories,Sleepwear",
  },
  {
    Name: "Marshalls",
    Website: "https://www.marshalls.com/",
    "Verified Certifications": "",
    "Self-Generated Tags": "",
    "Red Flags": "",
    Price: "",
    "Owned By/Associated With": "TJX",
    Category: "Women,Men,Kids,Home,Bath/Body",
    "Key Products": "All of the Above",
  },
  {
    Name: "naja",
    Website: "https://www.naja.co/",
    "Verified Certifications": "",
    "Self-Generated Tags":
      "Recycled Materials,Water Reduction Initiatives,Limited Amount of Chemicals and Wastewater Used in Production,Living wages,Eco-friendly practices",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women",
    "Key Products": "Bras,Underwear",
  },
  {
    Name: "Nautica",
    Website: "https://www.nautica.com/",
    "Verified Certifications": "",
    "Self-Generated Tags":
      "Plan to Reduce Greenhouse Gas Emissions,Does Not Use Fur/Exotic Animal Skins",
    "Red Flags": "Lack of Info,Few Eco-Friendly Materials",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men,Kids",
    "Key Products":
      "Casual Wear,Business Wear,Outerwear,Denim,Underwear,Bras,Sleepwear,Shoes,Hats,Socks,Bags",
  },
  {
    Name: "New Balance",
    Website:
      "https://www.newbalance.com/sem-lp/?ecid=ps_Google_new%20balance_e_652894733_1161&gclid=CjwKCAiA17P9BRB2EiwAMvwNyHTHWkIZnSnnheG5BsPsiIQ0ru_pFmWzJWHJPfzP7Yk-Y3mSFDSg5RoClwoQAvD_BwE&gclsrc=aw.ds",
    "Verified Certifications":
      "Some Supply Chain Certified by FLA Workplace Code of Conduct",
    "Self-Generated Tags": "Eco-friendly practices,renewable energy",
    "Red Flags": "Low Fashion Transparency Index,Lack of Info",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men,Kids",
    "Key Products": "Shoes,Activewear,Bras,Socks,Bags,Hats",
  },
  {
    Name: "Nike",
    Website: "www.nike.com",
    "Verified Certifications": "FLA Workplace Code of Conduct",
    "Self-Generated Tags":
      "Eco-friendly practices,Recycled Materials,Does Not Use Fur/Exotic Animal Skins",
    "Red Flags": "Lack of Info,Mistreats Animals",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men,Kids,Maternity",
    "Key Products":
      "Shoes,Activewear,Swimwear,Loungewear,Socks,Bags,Hats,Casual Wear",
  },
  {
    Name: "old navy",
    Website: "https://oldnavy.gap.com/",
    "Verified Certifications":
      "'A' in the Carbon Disclosure Project (CDP) water security questionnaire",
    "Self-Generated Tags":
      "Recycled Materials,Plan to Reduce Greenhouse Gas Emissions,basic formal policy to protect animal welfare,Eco-friendly practices",
    "Red Flags": "Exotic Animal Skin/Fur",
    Price: "$",
    "Owned By/Associated With": "Gap Inc.",
    Category: "Women,Men,Kids,Maternity,Babies",
    "Key Products":
      "Denim,Casual Wear,Outerwear,Activewear,Shoes,Accessories,Swimwear,Jewelry,Makeup,Socks,Loungewear,Bras,Underwear",
  },
  {
    Name: "organic basics",
    Website: "https://us.organicbasics.com/",
    "Verified Certifications": "",
    "Self-Generated Tags":
      "Eco-friendly practices,Recycled Materials,Organic Cotton,renewable energy,Does Not Use Fur/Exotic Animal Skins",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men",
    "Key Products": "Bras,Casual Wear,Denim,Socks,Accessories,Activewear",
  },
  {
    Name: "Outerknown",
    Website: "https://www.outerknown.com/",
    "Verified Certifications":
      "Fair Trade Certified,Fair Labor Association,Bluesign Certified,GOTS Certified organic cotton",
    "Self-Generated Tags":
      "High Proportion of Eco-Friendly Materials,Uses Non-Toxic Dyes",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men",
    "Key Products": "Casual Wear,Denim,Swimwear,Shoes,Accessories",
  },
  {
    Name: "outland denim",
    Website: "https://www.outlanddenim.com/",
    "Verified Certifications": "GOTS Certified organic cotton",
    "Self-Generated Tags":
      "Eco-friendly practices,Recycled Materials,Does Not Use Fur/Exotic Animal Skins,Traces Most of Supply Chain",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men",
    "Key Products": "Denim,Casual Wear",
  },
  {
    Name: "Pacsun",
    Website: "",
    "Verified Certifications": "",
    "Self-Generated Tags": "Living wages,good animal rating",
    "Red Flags": "Lack of Info,Few Eco-Friendly Materials",
    Price: "$",
    "Owned By/Associated With": "",
    Category: "Women,Men",
    "Key Products":
      "Casual Wear,Denim,Outerwear,Swimwear,Activewear,Loungewear,Bras,Underwear,Shoes,Makeup",
  },
  {
    Name: "Pact",
    Website: "https://wearpact.com/",
    "Verified Certifications":
      "Fair Trade Certified,B Corp Certified,GOTS Certified organic cotton",
    "Self-Generated Tags":
      "High Proportion of Eco-Friendly Materials,Encourages Sustainable Users,Formal Statement Covering Workers Rights",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Maternity,Men,Kids,Bath/Body,Home",
    "Key Products": "Underwear,Bras,Socks,Casual Wear,Outerwear,Loungewear",
  },
  {
    Name: "Passion Lilie",
    Website: "https://passionlilie.com/",
    "Verified Certifications":
      "Fair Trade Federation Member,WFTO Guarantee System certified factory",
    "Self-Generated Tags":
      "good animal rating,Organic Cotton,Designed for longevity,Minimal Packaging,Uses Solar Power,Hand-crafted,Earth-friendly dyes,Water Reduction Initiatives,Above-Minimum Wages,vegan - no animal at all,Eco-friendly practices",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women",
    "Key Products": "Casual Wear,Business Wear,Outerwear,Bags,Accessories",
  },
  {
    Name: "Patagonia",
    Website: "https://www.patagonia.com/home/",
    "Verified Certifications":
      "Fair Trade Certified,B Corp Certified,FLA Workplace Code of Conduct",
    "Self-Generated Tags":
      "Recycled Materials,Ethical Supply Chain,Fair Trade,Safe and Fair Labor Standards,Fair Labor Practices,High Proportion of Eco-Friendly Materials,Plan to Reduce Greenhouse Gas Emissions,Eco-friendly practices",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men,Kids",
    "Key Products":
      "Outerwear,Activewear,Casual Wear,Swimwear,Socks,Hats,Bags,Accessories,Shoes,Underwear",
  },
  {
    Name: "People Tree",
    Website:
      "https://www.peopletree.co.uk/?utm_source=Affiliate&utm_medium=LinkShare&utm_campaign=Fluhu2U*BdY&utm_content=10&utm_term=UKNetwork&siteID=Fluhu2U.BdY-s6lNw26fi3hWoQXvbYFLkA",
    "Verified Certifications":
      "GOTS Certified organic cotton,Fairtrade International - Small Producers Organizations,WFTO Guarantee System certified factory",
    "Self-Generated Tags":
      "High Proportion of Eco-Friendly Materials,Uses Non-Toxic Dyes,Limited Amount of Chemicals and Wastewater Used in Production,Living wages,Ethical Supply Chain,Does Not Use Fur/Exotic Animal Skins",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women",
    "Key Products":
      "Casual Wear,Underwear,Business Wear,Socks,Outerwear,Sleepwear,Jewelry,Activewear",
  },
  {
    Name: "prAna",
    Website:
      "https://www.prana.com/women.html?mid=paidsearch&eid=google&gid=6&nid=cpcs_search_brand_dual&oid=[prana]_women&gclid=CjwKCAiAv4n9BRA9EiwA30WNDwua3vn2VFWLDfe6i-W5S0lubXmIzhZFRzSSG2BsSUj4Up0Yl-1laxoCK5YQAvD_BwE",
    "Verified Certifications":
      "Fair Trade Certified,GOTS Certified organic cotton,Some Supply Chain Certified by FLA Workplace Code of Conduct",
    "Self-Generated Tags":
      "High Proportion of Eco-Friendly Materials,Policy to Prevent Deforestation of Ancient and Endangered Forests in its Supply Chain",
    "Red Flags": "No Policy to Reduce Greenhouse Gas Emissions",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men",
    "Key Products":
      "Activewear,Casual Wear,Swimwear,Denim,Outerwear,Bras,Loungewear,Hats",
  },
  {
    Name: "Primark",
    Website: "https://www.primark.com/",
    "Verified Certifications": "",
    "Self-Generated Tags": "",
    "Red Flags":
      "Fast Fashion,Low Fashion Transparency Index,Uses Leather and Wool,Few Eco-Friendly Materials",
    Price: "$",
    "Owned By/Associated With": "",
    Category: "Women,Men,Kids,Bath/Body,Home",
    "Key Products": "All of the Above",
  },
  {
    Name: "Puma",
    Website: "",
    "Verified Certifications": "",
    "Self-Generated Tags":
      "Plan to Reduce Greenhouse Gas Emissions,Does Not Use Fur/Exotic Animal Skins,good animal rating",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men,Kids",
    "Key Products":
      "Activewear,Shoes,Casual Wear,Bras,Socks,Outerwear,Bags,Hats",
  },
  {
    Name: "rains",
    Website: "https://www.us.rains.com/",
    "Verified Certifications": "",
    "Self-Generated Tags": "eco-friendly shipping,vegan - no animal at all",
    "Red Flags": "Does Not Use Eco-Friendly Materials",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men",
    "Key Products": "Outerwear,Bags,Accessories",
  },
  {
    Name: "Ralph Lauren",
    Website: "https://www.ralphlauren.com/",
    "Verified Certifications": "Five Freedoms",
    "Self-Generated Tags": "Recyclable Packaging",
    "Red Flags":
      "Low Fashion Transparency Index,Exotic Animal Skin/Fur,Few Eco-Friendly Materials",
    Price: "$$",
    "Owned By/Associated With": "Ralph Lauren",
    Category: "Women,Men,Kids,Babies",
    "Key Products":
      "Casual Wear,Business Wear,Denim,Outerwear,Swimwear,Sleepwear,Loungewear,Shoes,Bags,Hats,Accessories,Socks,Jewelry,Fragrance",
  },
  {
    Name: "Ray Ban",
    Website:
      "https://www.ray-ban.com/usa/sunglasses/clp?cid=PM-SGA_300419-US-Brand-Core-Desktop-Exact_TM-All_ray+ban&gclid=CjwKCAiA17P9BRB2EiwAMvwNyOFmFs9MFP_IuLVoDuPXyOiTXqeD5LO4MROPzwMusjUNVgrD5MvfDRoCoLYQAvD_BwE&gclsrc=aw.ds",
    "Verified Certifications": "",
    "Self-Generated Tags": "",
    "Red Flags": "Does Not Use Eco-Friendly Materials,Lack of Info",
    Price: "$$",
    "Owned By/Associated With": "CasaGIN",
    Category: "Women,Men,Kids",
    "Key Products": "Sunglasses",
  },
  {
    Name: "Reebok",
    Website: "https://www.reebok.com/",
    "Verified Certifications":
      "Sustainable Apparel Coalition,Bluesign Certified,Above 70% in Fashion Transparency Index",
    "Self-Generated Tags":
      "Recycled Materials,Plant-Based Materials,Eco-friendly practices,Environmental Sustainability Plan,Living wages,Worker Empowerment,Does Not Use Fur/Exotic Animal Skins",
    "Red Flags": "",
    Price: "",
    "Owned By/Associated With": "Adidas",
    Category: "Women,Men,Kids",
    "Key Products":
      "Shoes,Activewear,Socks,Casual Wear,Bras,Swimwear,Sunglasses,Accessories,Bags,Hats,Loungewear",
  },
  {
    Name: "reformation",
    Website: "",
    "Verified Certifications": "",
    "Self-Generated Tags":
      "High Proportion of Eco-Friendly Materials,Recycled Materials,renewable energy",
    "Red Flags": "Exotic Animal Skin/Fur,Mistreats Animals",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women",
    "Key Products":
      "Casual Wear,Bras,Underwear,Denim,Outerwear,Loungewear,Swimwear,Accessories,Jewelry",
  },
  {
    Name: "Rudy Jude",
    Website: "https://rudyjude.com/",
    "Verified Certifications": "",
    "Self-Generated Tags":
      "High Proportion of Eco-Friendly Materials,Organic Cotton,Limited Amount of Chemicals and Wastewater Used in Production,good animal rating",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men,Kids,Babies",
    "Key Products": "Denim,Casual Wear,Loungewear",
  },
  {
    Name: "Saint Laurent",
    Website: "www.ysl.com",
    "Verified Certifications": "",
    "Self-Generated Tags":
      "Plan to Reduce Greenhouse Gas Emissions,Traces Most of Supply Chain,Environmental Sustainability Plan",
    "Red Flags": "Exotic Animal Skin/Fur",
    Price: "$$$",
    "Owned By/Associated With": "Kering",
    Category: "Women,Men",
    "Key Products": "Bags,Shoes,Accessories,Sunglasses",
  },
  {
    Name: "SavageXFenty",
    Website: "https://www.savagex.com/",
    "Verified Certifications": "",
    "Self-Generated Tags": "",
    "Red Flags": "Lack of Info",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men",
    "Key Products": "Bras,Underwear,Sleepwear",
  },
  {
    Name: "Seasalt",
    Website: "https://www.seasaltcornwall.co.uk/",
    "Verified Certifications": "",
    "Self-Generated Tags":
      "Organic Cotton,Recyclable Packaging,renewable energy,Does Not Use Fur/Exotic Animal Skins",
    "Red Flags": "Lack of Info",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men,Maternity",
    "Key Products": "Casual Wear,Outerwear,Loungewear",
  },
  {
    Name: "Shein",
    Website: "https://us.shein.com/",
    "Verified Certifications": "",
    "Self-Generated Tags": "",
    "Red Flags": "Lack of Info,Fast Fashion,Low Fashion Transparency Index",
    Price: "$",
    "Owned By/Associated With": "",
    Category: "Women,Men,Kids",
    "Key Products":
      "Casual Wear,Swimwear,Shoes,Accessories,Jewelry,Business Wear,Bags,Socks,Sunglasses,Makeup",
  },
  {
    Name: "Sierra",
    Website: "www.sierra.com",
    "Verified Certifications": "",
    "Self-Generated Tags": "",
    "Red Flags": "",
    Price: "",
    "Owned By/Associated With": "TJX",
    Category: "Women,Men,Kids",
    "Key Products":
      "Activewear,Casual Wear,Outerwear,Denim,Sleepwear,Underwear,Socks,Swimwear,Bags,Hats,Jewelry,Accessories,Shoes",
  },
  {
    Name: "Stay Wild",
    Website: "https://staywildswim.com/",
    "Verified Certifications": "",
    "Self-Generated Tags":
      "High Proportion of Eco-Friendly Materials,Recycled Materials,Water Reduction Initiatives,Traces Most of Supply Chain",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men",
    "Key Products": "Casual Wear,Loungewear",
  },
  {
    Name: "superga",
    Website: "",
    "Verified Certifications": "",
    "Self-Generated Tags": "",
    "Red Flags": "Lack of Info,Mistreats Animals",
    Price: "$$",
    "Owned By/Associated With": "Levis",
    Category: "Women,Men,Kids",
    "Key Products": "Shoes,Socks",
  },
  {
    Name: "Target",
    Website: "target.com",
    "Verified Certifications":
      "Energy Star Certification,New Plastics Economy Global Commitment",
    "Self-Generated Tags":
      "Supports Charities,Plan to Reduce Greenhouse Gas Emissions,Working to Eliminate Hazardous Chemicals,Water Reduction Initiatives,Uses Solar Power,Sustainable Cotton",
    "Red Flags": "Mistreats Workers,Tax Avoidance",
    Price: "$",
    "Owned By/Associated With": "",
    Category: "Women,Men,Kids,Babies,Bath/Body,Home,Books",
    "Key Products": "All of the Above",
  },
  {
    Name: "The Anjelms Project",
    Website: "https://www.anjelms.com/",
    "Verified Certifications": "",
    "Self-Generated Tags":
      "Recycles,Uses Non-Toxic Dyes,Traces Most of Supply Chain",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men",
    "Key Products": "Casual Wear,Loungewear,Outerwear,Bags,Shoes",
  },
  {
    Name: "The North Face",
    Website: "",
    "Verified Certifications": "Bluesign Certified",
    "Self-Generated Tags":
      "Recycled Materials,Plan to Reduce Greenhouse Gas Emissions,Eco-friendly practices",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men,Kids",
    "Key Products": "Outerwear,Casual Wear,Activewear,Shoes,Hats,Accessories",
  },
  {
    Name: "The Nude Label",
    Website: "https://thenudelabel.com/en/",
    "Verified Certifications": "GOTS Certified organic cotton",
    "Self-Generated Tags":
      "High Proportion of Eco-Friendly Materials,Organic Cotton,Locally made,Traces Most of Supply Chain,vegan - no animal at all,Living wages",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men",
    "Key Products": "Underwear,Bras,Socks",
  },
  {
    Name: "Thunderpants USA",
    Website: "https://thunderpantsusa.com/",
    "Verified Certifications": "Fair Labor Association",
    "Self-Generated Tags":
      "Earth-friendly dyes,Ethical Supply Chain,Fair Labor Practices,Organic Cotton,Traces Most of Supply Chain,Inclusive sizes",
    "Red Flags": "Lack of Info",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men,Kids",
    "Key Products": "Underwear,Bras,Casual Wear,Loungewear,Activewear",
  },
  {
    Name: "TIffany & Co.",
    Website:
      "https://www.tiffany.com/?omcid=ppc_google_US_EN_Non-Bridal_Search_Google_Brand_Core+Brand_Exact&mkwid=smm6B0md4|pcrid|439167370507|pkw|tiffany|pmt|e|pdv|c|mtid|744dpc50313|slid||productid||targetids|kwd-13259446|groupid|98242598879|&gclid=CjwKCAiA17P9BRB2EiwAMvwNyJsT0uxdjCPVkIe6IG0a13drMGoJ2RfYFbLifRvTqfAc8d0-pbtZThoCbckQAvD_BwE",
    "Verified Certifications": "",
    "Self-Generated Tags": "renewable energy",
    "Red Flags": "Lack of Info",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men,Home",
    "Key Products": "Jewelry,Fragrance,Sunglasses",
  },
  {
    Name: "TJ Maxx",
    Website: "https://tjmaxx.tjx.com/",
    "Verified Certifications": "",
    "Self-Generated Tags": "",
    "Red Flags": "",
    Price: "",
    "Owned By/Associated With": "TJX",
    Category: "Women,Men,Kids,Home,Bath/Body",
    "Key Products": "All of the Above",
  },
  {
    Name: "TJX",
    Website: "tjx.com",
    "Verified Certifications": "",
    "Self-Generated Tags":
      "Plan to Reduce Greenhouse Gas Emissions,Greenhouse Gas Reductions,Supports BLM,Community Outreach,Supports Charities,Support and promotes gender equality,Uses Solar Power",
    "Red Flags": "",
    Price: "",
    "Owned By/Associated With": "",
    Category: "Parent Company",
    "Key Products": "",
  },
  {
    Name: "Tommy Hilfiger",
    Website: "https://usa.tommy.com/en",
    "Verified Certifications":
      "Some Supply Chain Certified by FLA Workplace Code of Conduct",
    "Self-Generated Tags":
      "Greenhouse Gas Reductions,Policy to Prevent Deforestation of Ancient and Endangered Forests in its Supply Chain,Eco-friendly practices",
    "Red Flags": "Exotic Animal Skin/Fur,Mistreats Animals",
    Price: "",
    "Owned By/Associated With": "",
    Category: "Women,Men,Kids",
    "Key Products":
      "Casual Wear,Business Wear,Outerwear,Denim,Underwear,Bras,Sleepwear,Shoes,Hats,Socks,Bags,Loungewear,Activewear,Swimwear,Jewelry",
  },
  {
    Name: "Topshop",
    Website: "https://us.topshop.com/",
    "Verified Certifications":
      "Some Supply Chain Certified by SMETA Best Practice Guidance",
    "Self-Generated Tags": "",
    "Red Flags":
      "Fast Fashion,Lack of Info,Low Fashion Transparency Index,Few Eco-Friendly Materials",
    Price: "$",
    "Owned By/Associated With": "ASOS",
    Category: "Women,Men,Bath/Body",
    "Key Products": "Casual Wear,Denim,Activewear,Shoes,Outerwear,Swimwear",
  },
  {
    Name: "Two Sparrow Australia",
    Website: "https://www.twosparrow.com.au/",
    "Verified Certifications":
      "certified by the Workplace Condition Assessment (WCA),Ethical Clothing Australia",
    "Self-Generated Tags":
      "Recycled Materials,Water Reduction Initiatives,vegan - no animal at all,Eco-friendly practices",
    "Red Flags": "Lack of Info",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women",
    "Key Products": "Swimwear,Casual Wear",
  },
  {
    Name: "UGG",
    Website: "https://www.ugg.com/",
    "Verified Certifications": "",
    "Self-Generated Tags": "Eco-friendly practices",
    "Red Flags": "Low Fashion Transparency Index,Lack of Info",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men,Kids",
    "Key Products": "Shoes,Outerwear,Sleepwear,Loungewear,Casual Wear,Bags",
  },
  {
    Name: "Under Armour",
    Website:
      "https://www.underarmour.com/en-us/?cid=PS%7c%7cTM%7cGGL%7cAll%7cunder+armour%7cALL%7call%7call%7cEXACT%7cDG%7cp57710398160&gclid=CjwKCAiA17P9BRB2EiwAMvwNyCjM-1ttCIppyaLgNBoWhiBO62AF9c_JVcd4I4yX_i5IfW2bOii3SxoCI6sQAvD_BwE&gclsrc=aw.ds",
    "Verified Certifications":
      "Some Supply Chain Certified by FLA Workplace Code of Conduct,Responsible Down Standard Accredited",
    "Self-Generated Tags": "",
    "Red Flags":
      "Low Fashion Transparency Index,Lack of Info,Few Eco-Friendly Materials",
    Price: "",
    "Owned By/Associated With": "",
    Category: "Men,Women,Kids",
    "Key Products":
      "Activewear,Shoes,Outerwear,Casual Wear,Bras,Underwear,Socks,Bags,Hats,Sunglasses",
  },
  {
    Name: "Underprotection",
    Website: "https://underprotection.eu/",
    "Verified Certifications": "Oeko Tex Certification",
    "Self-Generated Tags":
      "Recycled Materials,High Proportion of Eco-Friendly Materials,Traces Most of Supply Chain,Does Not Use Fur/Exotic Animal Skins",
    "Red Flags": "Lack of Info",
    Price: "$",
    "Owned By/Associated With": "",
    Category: "Women",
    "Key Products": "Underwear,Bras,Loungewear,Swimwear,Socks,Bags",
  },
  {
    Name: "Uniqlo",
    Website: "https://www.uniqlo.com/",
    "Verified Certifications":
      "Some Supply Chain Certified by FLA Workplace Code of Conduct,Responsible Down Standard Accredited",
    "Self-Generated Tags":
      "Recycled Materials,Plan to Reduce Greenhouse Gas Emissions,Minimal Packaging,Policy to Prevent Deforestation of Ancient and Endangered Forests in its Supply Chain,Traces Most of Supply Chain,Does Not Use Fur/Exotic Animal Skins,Eco-friendly practices",
    "Red Flags": "Lack of Info",
    Price: "$",
    "Owned By/Associated With": "",
    Category: "Women,Men,Kids,Babies,Home",
    "Key Products":
      "Casual Wear,Outerwear,Activewear,Denim,Loungewear,Bras,Underwear,Socks,Shoes,Accessories,Hats,Sunglasses,Bags",
  },
  {
    Name: "Urban Outfitters",
    Website:
      "https://www.urbanoutfitters.com/?ref=logo&utm_medium=cpc&utm_source=google&utm_campaign=%5BBrand_Text%5D_-_UO_-_Trademark_-_Exact&utm_content=UO_-_Trademark&utm_term=urban_outfitters&adpos=&creative=476790286521&device=c&matchtype=e&network=g&gclid=CjwKCAiA17P9BRB2EiwAMvwNyF7mq9owO0pIQt_qFywbyMqUyqLDAntI4NXHqnRhwtrC10z7IRF7ZBoCR3cQAvD_BwE&gclsrc=aw.ds",
    "Verified Certifications": "",
    "Self-Generated Tags": "renewable energy",
    "Red Flags": "Lack of Info,Low Fashion Transparency Index",
    Price: "$",
    "Owned By/Associated With": "Vatter",
    Category: "Women,Men,Home",
    "Key Products":
      "Casual Wear,Outerwear,Bras,Denim,Underwear,Activewear,Swimwear,Makeup,Shoes,Accessories,Jewelry,Bags,Hats,Socks,Sunglasses",
  },
  {
    Name: "valentino",
    Website: "https://www.valentino.com",
    "Verified Certifications": "",
    "Self-Generated Tags": "Working to Eliminate Hazardous Chemicals",
    "Red Flags": "Low Fashion Transparency Index,Exotic Animal Skin/Fur",
    Price: "$$$",
    "Owned By/Associated With": "",
    Category: "Women,Men",
    "Key Products":
      "Business Wear,Evening Wear,Outerwear,Bags,Casual Wear,Denim,Swimwear,Shoes,Jewelry,Hats,Fragrance,Sunglasses",
  },
  {
    Name: "vans",
    Website: "www.vans.com",
    "Verified Certifications": "Five Freedoms",
    "Self-Generated Tags": "Plan to Reduce Greenhouse Gas Emissions",
    "Red Flags": "Few Eco-Friendly Materials",
    Price: "",
    "Owned By/Associated With": "",
    Category: "Women,Men,Kids",
    "Key Products": "Shoes,Casual Wear,Bags,Hats,Sunglasses,Socks",
  },
  {
    Name: "Vatter",
    Website: "https://www.vatter-fashion.com/",
    "Verified Certifications": "GOTS Certified organic cotton",
    "Self-Generated Tags":
      "Recycled Packaging,Traces Most of Supply Chain,vegan - no animal at all",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men",
    "Key Products": "Underwear,Bras,Casual Wear",
  },
  {
    Name: "Vege Threads",
    Website: "https://www.vegethreads.com/",
    "Verified Certifications":
      "GOTS Certified organic cotton,Ethical Clothing Australia",
    "Self-Generated Tags":
      "High Proportion of Eco-Friendly Materials,Locally made,Uses Non-Toxic Dyes,Water Reduction Initiatives,Traces Most of Supply Chain,Living wages,wool from non-mulesed sheep,good animal rating,Does Not Use Fur/Exotic Animal Skins",
    "Red Flags": "",
    Price: "",
    "Owned By/Associated With": "",
    Category: "Women",
    "Key Products": "Casual Wear,Activewear,Underwear,Bras,Swimwear,Socks",
  },
  {
    Name: "Victoria's Secret",
    Website:
      "https://www.victoriassecret.com/us/?cm_mmc=SEM-_-GOOGLE-_-VSD_VS_General_Brand_Exact-_-VS_General_Brand_Exact&&gclid=CjwKCAiA17P9BRB2EiwAMvwNyJmxyk6MQK0jvRVbJBn3kNs1nGsb4IXqyxpjr3E1RwE5sSb5N_SvKhoCZvEQAvD_BwE&gclsrc=aw.ds",
    "Verified Certifications": "",
    "Self-Generated Tags": "",
    "Red Flags":
      "Low Fashion Transparency Index,Lack of Info,Few Eco-Friendly Materials",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women",
    "Key Products":
      "Underwear,Bras,Casual Wear,Sleepwear,Loungewear,Activewear,Makeup,Swimwear,Bags",
  },
  {
    Name: "Vitamin A",
    Website: "https://www.vitaminaswim.com/",
    "Verified Certifications":
      "Code of Conduct covers the ILO Four Fundamental Freedoms principles",
    "Self-Generated Tags":
      "High Proportion of Eco-Friendly Materials,Recycled Materials,Locally made,Limited Amount of Chemicals and Wastewater Used in Production,Living wages,Traces Most of Supply Chain,good animal rating,Does Not Use Fur/Exotic Animal Skins",
    "Red Flags": "",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women",
    "Key Products": "Swimwear,Loungewear,Casual Wear",
  },
  {
    Name: "Walmart",
    Website: "walmart.com",
    "Verified Certifications": "",
    "Self-Generated Tags":
      "Recycles,Environmental Sustainability Plan,Plan to Reduce Greenhouse Gas Emissions",
    "Red Flags":
      "Tax Avoidance,Discriminatory Policies/Practices,Exploitive Prices,Politically Misaligned,Privacy Violations,Dumps Hazardous Materials",
    Price: "",
    "Owned By/Associated With": "",
    Category: "Parent Company",
    "Key Products": "All of the Above",
  },
  {
    Name: "We Are HAH",
    Website: "https://www.wearehah.com/",
    "Verified Certifications": "",
    "Self-Generated Tags":
      "renewable energy,Water Reduction Initiatives,Does Not Use Fur/Exotic Animal Skins",
    "Red Flags": "Lack of Info,Few Eco-Friendly Materials",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women",
    "Key Products": "Underwear,Bras,Loungewear,Sleepwear,Casual Wear",
  },
  {
    Name: "Zara",
    Website: "https://www.zara.com/",
    "Verified Certifications": "",
    "Self-Generated Tags":
      "Recycled Packaging,Plan to Reduce Greenhouse Gas Emissions,Does Not Use Fur/Exotic Animal Skins,Eco-friendly practices",
    "Red Flags": "Lack of Info",
    Price: "$$",
    "Owned By/Associated With": "",
    Category: "Women,Men,Kids",
    "Key Products":
      "Casual Wear,Business Wear,Evening Wear,Outerwear,Denim,Loungewear,Shoes,Underwear,Bras,Bags,Makeup,Jewelry",
  },
];

const certifications = [
  {
    Name: "Fair Trade Certified",
    Description:
      "When you see a product with the Fair Trade Certified seal, you can be sure it was made according to rigorous social, environmental, and economic standards. We work closely on the ground with producers and certify transactions between companies and their suppliers to ensure that the people making Fair Trade Certified goods work in safe conditions, protect the environment, build sustainable livelihoods, and earn additional money to empower and uplift their communities.",
    Source: "https://www.fairtradecertified.org/why-fair-trade",
    "Real Name": "",
    Parent: "",
    "Sustainability Value": 6,
    "Ethical Value": 8,
  },
  {
    Name: "Organic Cotton Certified",
    Description:
      "Organic cotton certification tracks and identifies the use of organic cotton through a series of certificates. A farm certificate ensures that the cotton produced meets organic farming standards. A scope certificate ensures that the company is qualified to produce organic cotton. And a transaction certificate tracks the organic cotton passed from one hand to another.",
    Source:
      "http://aboutorganiccotton.org/wp-content/uploads/2016/04/AOC-OC_Certification_Process_EN.png?x52442",
    "Real Name": "",
    Parent: "",
    "Sustainability Value": 4,
    "Ethical Value": 4,
  },
  {
    Name: "Philanthropic Initiative",
    Description:
      "This organization partners with companies that seek to participate in various philanthropic activities including racial equality efforts, education, and community support.",
    Source: "https://www.tpi.org/about",
    "Real Name": "Philanthropic Initiative Partner",
    Parent: "",
    "Sustainability Value": 0,
    "Ethical Value": 2,
  },
  {
    Name: "Fair Labor Association",
    Description:
      'A company accredited by the Fair Labor association has committed "to promoting and complying with international labor standards throughout their supply chains." This means "adopting and communicating workplace standards; training staff to assess and remediate noncompliance issues; conducting internal assessments of facilities; and providing workers with confidential reporting channels.',
    Source: "https://www.fairlabor.org/accreditation",
    "Real Name": "Fair Labor Accredited",
    Parent: "",
    "Sustainability Value": 0,
    "Ethical Value": 8,
  },
  {
    Name: "Bluesign Certified",
    Description:
      "A bluesign APPROVED company minimizes harmful chemicals and dyes during their textile production process, as well as meets criteria for optimizing their sustainability when constructing their products",
    Source:
      "https://www.bluesign.com/en#:~:text=The%20blue%20way,-THE%20BLUE%20WAY&text=BLUESIGN%20is%20a%20system%20that,factory%20floor%20to%20finished%20product.",
    "Real Name": "bluesign APPROVED",
    Parent: "",
    "Sustainability Value": 6,
    "Ethical Value": 0,
  },
  {
    Name: "Green Certified",
    Description:
      'Green America certifies businesses that are:\n\nActively using their business as a tool for positive social change;\nOperating a "values-driven" enterprise according to principles of social justice AND environmental sustainability;\nEnvironmentally responsible in the way they source, manufacture, and market their products and run their operations and facilities;\nSocially equitable and committed to extraordinary practices that benefit workers, customers, communities, and the environment; and accountable for their work by continually improving and tracking their progress, and operating with transparency in every facet of their business.',
    Source: "greenamerica.org/green-america-green-business-certification",
    "Real Name": "Green America Certified Business",
    Parent: "",
    "Sustainability Value": 8,
    "Ethical Value": 8,
  },
  {
    Name: "Fair Trade Federation Member",
    Description:
      "Fair Trade federation members are committed to the following goals when interacting with producers: developing transparent and accountable relationships, building capacity, promoting fair trade, paying promptly and fairly, supporting safe and empowering work conditions, ensuring the rights of children, cultivate environmental stewardship, respecting cultural identity, and following a specific code of practice as outlined by the Federation.",
    Source:
      "https://www.fairtradefederation.org/fair-trade-federation-principles/#1548272564768-3386d931-fd6f",
    "Real Name": "",
    Parent: "",
    "Sustainability Value": 4,
    "Ethical Value": 8,
  },
  {
    Name: "Oeko Tex Certification",
    Description:
      "If a textile article carries the STANDARD 100 label, you can be certain that every component of this article, i.e. every thread, button and other accessories, has been tested for harmful substances and that the article therefore is harmless for human health.'",
    Source:
      "https://www.oeko-tex.com/en/our-standards/standard-100-by-oeko-tex",
    "Real Name": "Oeko-Text STANDARD 100 label",
    Parent: "",
    "Sustainability Value": 6,
    "Ethical Value": 4,
  },
  {
    Name: "GOTS Certified organic cotton",
    Description:
      "The Global Organic Textile Standard (GOTS) requires organic fibres grown without insecticides, herbicides, or GMOs.  The standard also requires ethical treatment of workers and safe chemical inputs during the production process, as well as organic fibers being used in the packaging, labeling, trading, and distribution process of textiles.",
    Source: "https://www.global-standard.org/the-standard/gots-key-features",
    "Real Name": "GOTS Certified",
    Parent: "",
    "Sustainability Value": 4,
    "Ethical Value": 4,
  },
  {
    Name: "1% for the Planet Member",
    Description:
      "Businesses that join 1% for the Planet commit to giving 1% of gross sales each year to our approved nonprofit partners.",
    Source: "https://www.onepercentfortheplanet.org/",
    "Real Name": "",
    Parent: "",
    "Sustainability Value": 2,
    "Ethical Value": 2,
  },
  {
    Name: "Climate Neutral Certification",
    Description:
      "When you see the label, you know that a brand has achieved zero net carbon emissions by cleaning up its historical emissions, and is on a journey to limit carbon emissions from its operations.",
    Source: "https://www.climateneutral.org/faq",
    "Real Name": "Climate Neutral Certified",
    Parent: "",
    "Sustainability Value": 8,
    "Ethical Value": 0,
  },
  {
    Name: "Green America Certified Business",
    Description:
      'Green America certifies businesses that are:\n\nActively using their business as a tool for positive social change;\nOperating a "values-driven" enterprise according to principles of social justice AND environmental sustainability;\nEnvironmentally responsible in the way they source, manufacture, and market their products and run their operations and facilities;\nSocially equitable and committed to extraordinary practices that benefit workers, customers, communities, and the environment; and accountable for their work by continually improving and tracking their progress, and operating with transparency in every facet of their business.',
    Source: "greenamerica.org/green-america-green-business-certification",
    "Real Name": "Green America Certified Business",
    Parent: "",
    "Sustainability Value": 8,
    "Ethical Value": 8,
  },
  {
    Name: "Energy Star Certification",
    Description:
      "This brand uses buildings that are Energy Star Certified to produce its textiles. Energy Star certification means that the building meets EPA standards for energy efficiency.",
    Source: "https://www.energystar.gov/",
    "Real Name": "Energy Star Certified",
    Parent: "",
    "Sustainability Value": 4,
    "Ethical Value": 0,
  },
  {
    Name: "WaterSense Certification",
    Description:
      "WaterSense, a voluntary partnership program sponsored by the U.S. Environmental Protection Agency (EPA), is both a label for water-efficient products and a resource for helping you save water.",
    Source: "https://www.epa.gov/watersense/about-watersense",
    "Real Name": "WaterSense Certified",
    Parent: "",
    "Sustainability Value": 4,
    "Ethical Value": 0,
  },
  {
    Name: "Cradle to Cradle Institute Member",
    Description:
      "Cradle to Cradle Certified™ is a globally recognized measure of safer, more sustainable products made for the circular economy...To receive certification, products are assessed for environmental and social performance across five critical sustainability categories: material health, material reuse, renewable energy and carbon management, water stewardship, and social fairness.",
    Source: "https://www.c2ccertified.org/get-certified/product-certification",
    "Real Name": "Cradle to Cradle Certified",
    Parent: "",
    "Sustainability Value": 8,
    "Ethical Value": 4,
  },
  {
    Name: "FSC-Certified",
    Description:
      "FSC certification ensures that products come from responsibly managed forests that provide environmental, social and economic benefits.",
    Source: "https://us.fsc.org/en-us/certification",
    "Real Name": "FSC Certified",
    Parent: "",
    "Sustainability Value": 4,
    "Ethical Value": 4,
  },
  {
    Name: "SFI Chain-of-Custody Certification",
    Description:
      "Sustainable Forest Initiative's \"forest certification standard is based on principles that promote sustainable forest management, including measures to protect water quality, biodiversity, wildlife habitat, species at risk and Forests with Exceptional Conservation Value.",
    Source: "https://sfimi.org/about",
    "Real Name": "",
    Parent: "",
    "Sustainability Value": 4,
    "Ethical Value": 0,
  },
  {
    Name: "Greenguard Certification",
    Description:
      'If a company is Greenguard Certified, it uses buildings or equipment "that have achieved GREENGUARD Certification are scientifically proven to meet some of the world’s most rigorous, third-party chemical emissions standards, helping to reduce indoor air pollution and the risk of chemical exposure, while aiding in the creation of healthier indoor environments.',
    Source:
      "https://www.ul.com/resources/ul-greenguard-certification-program#:~:text=air%20pollution%20levels.-,Products%20that%20have%20achieved%20GREENGUARD%20Certification%20are%20scientifically%20proven%20to,creation%20of%20healthier%20indoor%20environments.",
    "Real Name": "",
    Parent: "",
    "Sustainability Value": 4,
    "Ethical Value": 0,
  },
  {
    Name: "LEED Verified",
    Description:
      'If a brand is LEED Verified, it produces its products in buildings that are LEED Verified. "LEED (Leadership in Energy and Environmental Design) is the most widely used green building rating system in the world. Available for virtually all building types, LEED provides a framework for healthy, highly efficient, and cost-saving green buildings.',
    Source: "https://www.usgbc.org/leed/why-leed",
    "Real Name": "",
    Parent: "",
    "Sustainability Value": 4,
    "Ethical Value": 0,
  },
  {
    Name: "BREEAM Reviewed",
    Description:
      "If a brand is BREEAM Certified, its buildings are actually what's certified. \"BREEAM is an international scheme that provides independent third party certification of the assessment of the sustainability performance of individual buildings, communities and infrastructure projects.",
    Source: "https://www.breeam.com/discover/how-breeam-certification-works/",
    "Real Name": "BREEAM Certified",
    Parent: "",
    "Sustainability Value": 4,
    "Ethical Value": 0,
  },
  {
    Name: "Green Seal",
    Description:
      "If a brand is Green Seal Certified, its buildings and factories use products (not necessarily produce products) that meet high standards of sustainability.",
    Source: "https://greenseal.org/",
    "Real Name": "",
    Parent: "",
    "Sustainability Value": 4,
    "Ethical Value": 0,
  },
  {
    Name: "USDA Biopreferred",
    Description:
      'If a brand is USDA biopreferred, it means that the products used or created by this brand are "(A) composed, in whole or in significant part, of biological products, including renewable domestic agricultural materials, renewable chemicals, and forestry materials; or (B) an intermediate ingredient or feedstock',
    Source:
      "https://www.biopreferred.gov/BioPreferred/faces/pages/AboutBioPreferred.xhtml",
    "Real Name": "",
    Parent: "",
    "Sustainability Value": 4,
    "Ethical Value": 0,
  },
  {
    Name: "SCS Certified Calcompliant",
    Description:
      "SCS calCOMPliant™ provides emission testing of panels and inspects manufacturing processes for manufacturers that sell or supply composite wood products to California.",
    Source: "https://www.scscertified.com/docs/calCOMPliant_sellsheet_web.pdf",
    "Real Name": "",
    Parent: "",
    "Sustainability Value": 4,
    "Ethical Value": 0,
  },
  {
    Name: "Rainforest Alliance Certified",
    Description:
      'This seal means that this brand produces products that are"produced using methods that support the three pillars of sustainability: social, economic, and environmental." Brands that are rainforest certified are committed to preserving forests, following climate standards, preserving human rights, and improving community livelihood.',
    Source:
      "https://www.rainforest-alliance.org/faqs/what-does-rainforest-alliance-certified-mean",
    "Real Name": "",
    Parent: "",
    "Sustainability Value": 6,
    "Ethical Value": 6,
  },
  {
    Name: "SCS Certified Indoor Advantage",
    Description:
      "If a brand is SCS Indoor Advantage Certified, its buildings use interior products, such as furniture, with low emissions.",
    Source:
      "https://www.scsglobalservices.com/services/indoor-air-quality-certification",
    "Real Name": "SCS Indoor Advantage Certified",
    Parent: "",
    "Sustainability Value": 4,
    "Ethical Value": 0,
  },
  {
    Name: "SCS Certified Recycled Content",
    Description:
      "If a brand is SCS Recycled Content Certified, it sells products that are at least partially constructed from recycled materials.",
    Source:
      "https://www.scsglobalservices.com/services/recycled-content-certification",
    "Real Name": "SCS Recycled Content Certified",
    Parent: "",
    "Sustainability Value": 4,
    "Ethical Value": 0,
  },
  {
    Name: "LGBT Business Enterprise",
    Description:
      "If a brand is an LGBT Business Enterprise, it is majority-owned by LGBT individuals.",
    Source: "https://www.nglcc.org/get-certified",
    "Real Name": "",
    Parent: "",
    "Sustainability Value": 0,
    "Ethical Value": 4,
  },
  {
    Name: "National Minority Supplier Development Council (NMSDC) Member",
    Description:
      "If a brand is a National Minority Supplier Development Council (NMSDC) Member, it is a minority-owned business—meaning that it is majority-owned by Asian, Black, Hispanic, and Native American individuals.",
    Source: "https://nmsdc.org/about-nmsdc/",
    "Real Name": "",
    Parent: "",
    "Sustainability Value": 0,
    "Ethical Value": 4,
  },
  {
    Name: "Women's Business Enterprise National Council (WBENC) Certified",
    Description:
      "If a brand is Women's Business Enterprise National Council (WBENC) Certified, it is a women-owned business.",
    Source: "https://www.wbenc.org/",
    "Real Name": "",
    Parent: "",
    "Sustainability Value": 0,
    "Ethical Value": 4,
  },
  {
    Name: "Disability:In Certification",
    Description:
      "If a brand is Disability:In certified, it is a disability-owned or a veteran-disability-owned business enterprise.",
    Source:
      "https://disabilityin.org/what-we-do/supplier-diversity/get-certified/",
    "Real Name": "Disability:In Certified",
    Parent: "",
    "Sustainability Value": 0,
    "Ethical Value": 4,
  },
  {
    Name: "American with Disabilities Act (ADA) Certified",
    Description:
      "If a brand is ADA Compliant, its online shopping tools and/or stores follow design standards that ensure that it is accessible to people of all ability types, including those with disabilities.",
    Source: "https://www.ada.gov/pcatoolkit/chap5toolkit.htm",
    "Real Name": "ADA Compliant",
    Parent: "",
    "Sustainability Value": 0,
    "Ethical Value": 4,
  },
  {
    Name: "Above 70% in Fashion Transparency Index",
    Description:
      "The Fashion Transparency Index indicates whether a brand actively discloses information about its policies, practices, and supply chain. The higher the index, the more transparent the component.",
    Source: "https://www.fashionrevolution.org/about/transparency/",
    "Real Name": "",
    Parent: "",
    "Sustainability Value": 2,
    "Ethical Value": 2,
  },
  {
    Name: "Cotton Made in Africa Participant",
    Description:
      "If a brand is a Cotton Made in Africa Participant, they purchase sustainably-produced cotton from smallholder farmers in Africa—thereby helping people and the environment via trade, rather than donations.",
    Source: "https://cottonmadeinafrica.org/en/about-us/",
    "Real Name": "",
    Parent: "",
    "Sustainability Value": 4,
    "Ethical Value": 4,
  },
  {
    Name: "Fair Wear Foundation Member",
    Description:
      "If a brand is a member of the Fair Wear Foundation, it is committed to improving the working conditions of its factory workers all across its supply chains.",
    Source:
      "https://www.fairwear.org/join-the-movement/become-a-member/what-does-it-mean-to-be-a-fair-wear-member/",
    "Real Name": "",
    Parent: "",
    "Sustainability Value": 0,
    "Ethical Value": 2,
  },
  {
    Name: "Sweden Textile Initiative for Climate Action Member",
    Description:
      "If a brand is a member of Sweden Textile Initiative for Climate Action, that brand is committed to achieving carbon neutrality (or climate positivity) before 2050.",
    Source:
      "https://www.sustainablefashionacademy.org/STICA#:~:text=Here%20in%20Sweden%2C%20our%20government,be%20climate%20neutral%20by%202050.&text=Its%20aim%20is%20to%20support,while%20strengthening%20our%20global%20competitiveness.",
    "Real Name": "Sweden Textile Initiative for Climate Action Signatory",
    Parent: "",
    "Sustainability Value": 2,
    "Ethical Value": 0,
  },
  {
    Name: "Responsible Down Standard Accredited",
    Description:
      'If a brand is certified by the Responsible Down Standard, it ensures "that down and feathers come from animals that have not been subjected to any unnecessary harm.',
    Source: "https://textileexchange.org/standards/responsible-down/",
    "Real Name": "",
    Parent: "",
    "Sustainability Value": 0,
    "Ethical Value": 2,
  },
  {
    Name: "Better Cotton Initiative",
    Description:
      "If a brand is a member of the Better Cotton initiative, its supply chain practices more sustainable farming techniques.",
    Source: "https://bettercotton.org/about-bci/who-we-are/",
    "Real Name": "Better Cotton Initiative Member",
    Parent: "",
    "Sustainability Value": 4,
    "Ethical Value": 0,
  },
  {
    Name: "RWS Certified Wool",
    Description:
      "If a brand uses RWS Certified wool, meaning that sheep are properly treated and that farmland on which the sheep are kept is properly managed.",
    Source: "https://textileexchange.org/standards/responsible-wool/",
    "Real Name": "",
    Parent: "",
    "Sustainability Value": 0,
    "Ethical Value": 2,
  },
  {
    Name: "FLA Workplace Code of Conduct",
    Description:
      'If a brand follows the FLA Workplace Code of Conduct, it has labor standards that ensure "decent and humane" working conditions. These conditions include protecting workers\' rights, preventing harassment/abuse, preventing forced labor or child labor, freedom of association and collective bargaining, and ensuring healthy/safe working environments.',
    Source: "https://www.fairlabor.org/our-work/code-of-conduct",
    "Real Name": "",
    Parent: "",
    "Sustainability Value": 0,
    "Ethical Value": 2,
  },
  {
    Name: "Sustainable Apparel Coalition",
    Description:
      "If a brand is a member of the Sustainable Apparel Coalition, it has committed to measurable sustainable production and consumer transparency.",
    Source: "https://apparelcoalition.org/the-sac/",
    "Real Name": "",
    Parent: "",
    "Sustainability Value": 0,
    "Ethical Value": 2,
  },
  {
    Name: "B Corp Certified",
    Description:
      "Certified B Corporations are businesses that meet the highest standards of verified social and environmental performance, public transparency, and legal accountability to balance profit and purpose.",
    Source: "https://bcorporation.net/about-b-corps",
    "Real Name": "",
    Parent: "",
    "Sustainability Value": 4,
    "Ethical Value": 6,
  },
  {
    Name: "Five Freedoms",
    Description:
      "If a brand practices the Five Freedoms, animals used to produce textiles are entitled to freedom from hunger and thirst, freedom from discomfort, freedom from pain/injury/disease, freedom to express normal behaviors, and freedom from fear or distress.",
    Source: "https://www.animalhumanesociety.org/health/five-freedoms-animals",
    "Real Name": "Adheres to Five Freedoms of Animal Welfare",
    Parent: "",
    "Sustainability Value": 0,
    "Ethical Value": 2,
  },
  {
    Name: "Some Supply Chain Certified by FLA Workplace Code of Conduct",
    Description:
      'If a brand follows some of the FLA Workplace Code of Conduct, it has labor standards that ensure "decent and humane" working conditions at some levels of their supply chain, but not all.',
    Source: "",
    "Real Name": "",
    Parent: "",
    "Sustainability Value": 0,
    "Ethical Value": 6,
  },
  {
    Name: "Ethical Trade Initiative Member",
    Description:
      "If a brand is a member of the Ethical Trade Initiative, it is committed to promoting respect for workers' rights around the globe.",
    Source: "https://www.ethicaltrade.org/about-eti",
    "Real Name": "",
    Parent: "",
    "Sustainability Value": 0,
    "Ethical Value": 6,
  },
  {
    Name: "Certified by Worldwide Responsible Accredited Production",
    Description:
      'If a brand is certified by the Worldwide Responsible Accredited Production, it is compliant with standards that promote "safe, lawful, humane and ethical manufacturing.',
    Source: "https://wrapcompliance.org/about/",
    "Real Name": "",
    Parent: "",
    "Sustainability Value": 0,
    "Ethical Value": 8,
  },
  {
    Name: "certified by the Workplace Condition Assessment (WCA)",
    Description:
      "If a brand has passed the Workplace Conditions Assessment, it has been tested for adhering to fair labor conditions, promoting fair hours/wages, ensuring worker healthy and safety, and effective management systems.",
    Source: "https://www.intertek.com/assurance/wca/",
    "Real Name": "Assessed by the Workplace Condition Assessment (WCA)",
    Parent: "",
    "Sustainability Value": 0,
    "Ethical Value": 6,
  },
  {
    Name: "Ethical Clothing Australia",
    Description:
      "If a brand is a member of Ethical Clothing Australia, its workers are being paid appropriately and working in safe conditions throughout their entire supply chain.",
    Source: "https://ethicalclothingaustralia.org.au/",
    "Real Name": "Ethical Clothing Australia Accredited",
    Parent: "",
    "Sustainability Value": 0,
    "Ethical Value": 8,
  },
  {
    Name: "U.N. Global Compact Signatory",
    Description:
      "If a brand is a signatory on the U.N. Global compact, it is committed to sustainability efforts, as well as the preservation of human rights and the environment. This does NOT ensure that the company has achieved sustainable or ethical production, but instead ensures that they are taking steps to improve their impact.",
    Source: "https://www.unglobalcompact.org/participation/join/commitment",
    "Real Name": "",
    Parent: "",
    "Sustainability Value": 2,
    "Ethical Value": 2,
  },
  {
    Name: "Fashion Pact Member",
    Description:
      'If a brand is a Fashion Pact Member, it is "committed to a common core of key environmental goals in three areas: stopping global warming, restoring biodiversity and protecting the oceans.',
    Source: "https://thefashionpact.org/?lang=en",
    "Real Name": "",
    Parent: "",
    "Sustainability Value": 2,
    "Ethical Value": 0,
  },
  {
    Name: "Some Supply Chain Certified by Social Accountability International",
    Description:
      "If a brand is partnered with Social Accountability International, it is working to advance human rights at workplaces worldwide. The brand is actively working to improve the treatment of its workers.",
    Source: "https://sa-intl.org/about/",
    "Real Name": "Partnered with Social Accountability International",
    Parent: "",
    "Sustainability Value": 0,
    "Ethical Value": 6,
  },
  {
    Name: "CanopyStyle Approved Policy",
    Description:
      "If a brand has a CanopyStyle Approved policy, it is committed to reducing deforestation, much of which can be attributed to the fashion industry, since pulp is often used to create fabrics such as rayon, modal, and lyocell.",
    Source: "https://canopyplanet.org/campaigns/canopystyle/",
    "Real Name": "",
    Parent: "",
    "Sustainability Value": 2,
    "Ethical Value": 0,
  },
  {
    Name: "Code of Conduct covers the ILO Four Fundamental Freedoms principles",
    Description:
      "This brand has a code of conduct that covers the following: freedom of association and the right to organize and bargain collectively; the prohibition of forced labor; prohibition of child labor; and the elimination of discrimination in employment.",
    Source: "https://www.ilo.org/declaration/lang--en/index.htm",
    "Real Name": "",
    Parent: "",
    "Sustainability Value": 0,
    "Ethical Value": 2,
  },
  {
    Name: "Facilities are certified by SA8000",
    Description:
      "If a brand is SA8000 Certified, it ensures the fair treatment of its workers. This includes preventing child labor, preventing forced labor, ensuring worker health and safety, protecting freedom of association and right to collective bargaining, preventing discrimination, fair working hours, fair wages, fair management system, and fair disciplinary practices.",
    Source: "https://sa-intl.org/programs/sa8000/",
    "Real Name": "SA8000 Certified",
    Parent: "",
    "Sustainability Value": 0,
    "Ethical Value": 6,
  },
  {
    Name: "WFTO Guarantee System certified factory",
    Description:
      "If a brand is a member of the United Nations-led WTFO Guarantee System, it ensures fair trade at every level of the company/brand, as well as workers' rights and respect for the environment.",
    Source: "",
    "Real Name": "WTFO Guarantee System Member",
    Parent: "",
    "Sustainability Value": 6,
    "Ethical Value": 8,
  },
  {
    Name: "Some Supply Chain Certified by SMETA Best Practice Guidance",
    Description:
      "This brand has had some of its suppliers assessed for workers' rights violations. This audit is undertaken to achieve more responsible business practices.",
    Source: "https://www.sedex.com/our-services/smeta-audit/",
    "Real Name": "Some Suppliers SMETA Assessed",
    Parent: "SMETA Assessed",
    "Sustainability Value": 0,
    "Ethical Value": 4,
  },
  {
    Name: "Fairtrade International - Small Producers Organizations",
    Description:
      "This brand primarily owns small-scale farms that democratically make decisions for their organization, build resilient and inclusive organizations, and seek to uplift their communities.",
    Source:
      "https://www.fairtrade.net/standard/spohttps://www.fairtrade.net/standard/spo",
    "Real Name": "",
    Parent: "",
    "Sustainability Value": 4,
    "Ethical Value": 4,
  },
  {
    Name: "New Plastics Economy Global Commitment",
    Description:
      "If a brand is a signatory on the New Plastics Economy Global Commitment, it has committed to eliminating all problematic and unnecessary plastic items, innovating to make necessary plastics more reusable or compostable, and circulating existing plastic items in the economy to keep them out of the environment.",
    Source: "https://www.newplasticseconomy.org/projects/global-commitment/",
    "Real Name": "New Plastics Economy Global Commitment Signatory",
    Parent: "",
    "Sustainability Value": 2,
    "Ethical Value": 0,
  },
  {
    Name: "High Corporate Equality Index Score",
    Description:
      "If a brand has a high Corporate Equality Index, it has corporate policies and practices that ensure the fair inclusion of lesbian, gay, bisexual, transgender, and queer employees.",
    Source: "https://www.hrc.org/resources/corporate-equality-index",
    "Real Name": "",
    Parent: "",
    "Sustainability Value": 0,
    "Ethical Value": 6,
  },
  {
    Name:
      "'A' in the Carbon Disclosure Project (CDP) water security questionnaire",
    Description:
      'If a brand receives a "A" in the Carbon Disclosure Project\'s (CDP) Water Security Questionaire, it demonstrates awareness of water security, and has taken steps to preserve water security.',
    Source: "https://www.cdp.net/en/water",
    "Real Name": "",
    Parent: "",
    "Sustainability Value": 6,
    "Ethical Value": 0,
  },
  {
    Name: "SMETA Assessed",
    Description:
      "This brand has had its suppliers assessed for workers' rights violations. This audit is undertaken to achieve more responsible business practices.",
    Source: "https://www.sedex.com/our-services/smeta-audit/",
    "Real Name": "",
    Parent: "",
    "Sustainability Value": 0,
    "Ethical Value": 8,
  },
  {
    Name: "Tanneries Audited by the Leather Working Group",
    Description:
      "This brand has had its tanneries audited by the Leather Working Group, which seeks to make tanneries more sustainable and reduce the environmental impact of tanneries.",
    Source: "https://www.leatherworkinggroup.com/who-we-are/about-us",
    "Real Name": "",
    Parent: "",
    "Sustainability Value": 4,
    "Ethical Value": 0,
  },
  {
    Name: "",
    Description: "",
    Source: "",
    "Real Name": "",
    Parent: "",
    "Sustainability Value": "",
    "Ethical Value": "",
  },
  {
    Name: "",
    Description: "",
    Source: "",
    "Real Name": "",
    Parent: "",
    "Sustainability Value": "",
    "Ethical Value": "",
  },
  {
    Name: "",
    Description: "",
    Source: "",
    "Real Name": "",
    Parent: "",
    "Sustainability Value": "",
    "Ethical Value": "",
  },
];

const selfGenerated = [
  {
    Name: "Biodegradable materials",
    Description:
      "Some products by this brand are constructed form materials that will decompose within a reasonable amount of time, thereby avoiding long-term pollution.",
    "Real Name": "Uses Biodegradable Materials",
    "Sustainability Value": 3,
    "Ethical Value": 0,
  },
  {
    Name: "Black-Owned Business",
    Description: "This brand is owned or majority-owned by Black individuals.",
    "Real Name": "",
    "Sustainability Value": 0,
    "Ethical Value": 1,
  },
  {
    Name: "Community Outreach",
    Description:
      "This brand participates in outreach efforts that are intended to improve conditions or provide opportunities for the communities that surround their business.",
    "Real Name": "Community Outreach Efforts",
    "Sustainability Value": 0,
    "Ethical Value": 2,
  },
  {
    Name: "Deadstock materials",
    Description:
      'This brand uses "deadstock" materials or fabrics in its products, meaning its products are made from leftover fabrics from other companies that might otherwise end up in a landfill.',
    "Real Name": "Uses Deadstock Materials",
    "Sustainability Value": 3,
    "Ethical Value": 0,
  },
  {
    Name: "Designed for longevity",
    Description:
      'This brand creates products that are built to last, much unlike the harmful "fast fashion" trends that result in tons of clothes being discarded in landfills each year.',
    "Real Name": "Products Designed for Longevity",
    "Sustainability Value": 3,
    "Ethical Value": 0,
  },
  {
    Name: "Earth-friendly dyes",
    Description:
      "This brand uses earth-friendly, or low impact, dyes. These dyes require less water and produce less dye runoff.",
    "Real Name": "Uses Earth-friendly dyes",
    "Sustainability Value": 3,
    "Ethical Value": 0,
  },
  {
    Name: "Eco-friendly practices",
    Description:
      "This brand has some eco-friendly practices in place, but they are not specific steps and goals—just a general commitment to helping the environment.",
    "Real Name": "Some Eco-Friendly Practices",
    "Sustainability Value": 2,
    "Ethical Value": 0,
  },
  {
    Name: "Energy Efficient",
    Description:
      "This brand maintains energy efficiency in its fashion production process or supply chain.",
    "Real Name": "",
    "Sustainability Value": 3,
    "Ethical Value": 0,
  },
  {
    Name: "Environmental Preservation",
    Description: "This brand supports environmental preservation efforts.",
    "Real Name": "Supports Environmental Preservation",
    "Sustainability Value": 2,
    "Ethical Value": 0,
  },
  {
    Name: "Environmental Sustainability",
    Description:
      "This brand seeks to conduct its business in a way that it is environmentally sustainable, meaning that their production processes contribute minimally to climate change, deforestation, and other manifestations of environmental degradation.",
    "Real Name": "Environmental Sustainability Efforts",
    "Sustainability Value": 2,
    "Ethical Value": 0,
  },
  {
    Name: "Ethical Supply Chain",
    Description:
      "This brand seeks to treat its workers fairly and support just social causes throughout its supply chain.",
    "Real Name": "",
    "Sustainability Value": 0,
    "Ethical Value": 3,
  },
  {
    Name: "Fair Labor Practices",
    Description:
      "This brand supports fair labor practices such as a fair wage, fair hours, healthy/safe working conditions, and preservation of workers' rights.",
    "Real Name": "",
    "Sustainability Value": 0,
    "Ethical Value": 4,
  },
  {
    Name: "Fair Trade",
    Description:
      "This brand supports producers in developing countries by ensuring that they receive sustainable and equitable trade relationships.",
    "Real Name": "",
    "Sustainability Value": 0,
    "Ethical Value": 2,
  },
  {
    Name: "Hand-crafted",
    Description:
      "This brand sells hand-crafted products, rather than factory-made, machine produced products that are created en masse.",
    "Real Name": "Hand Crafted Products",
    "Sustainability Value": 2,
    "Ethical Value": 2,
  },
  {
    Name: "Inclusive sizes",
    Description:
      "This brand sells apparel that fits many or all different body types and sizes.",
    "Real Name": "Inclusive Sizes",
    "Sustainability Value": 0,
    "Ethical Value": 1,
  },
  {
    Name: "LGBTQ+ Allyship",
    Description:
      "This brand supports and respects the rights of LGBTQ+ individuals.",
    "Real Name": "",
    "Sustainability Value": 0,
    "Ethical Value": 1,
  },
  {
    Name: "Limited-run batches",
    Description:
      "This brand uses small-batch manufacturing, which reduces waste during the production process.",
    "Real Name": "Small Batch Manufacturing",
    "Sustainability Value": 3,
    "Ethical Value": 0,
  },
  {
    Name: "Living wages",
    Description:
      "This brand provides all its workers with a wage that effectively covers the basic costs of living.",
    "Real Name": "",
    "Sustainability Value": 0,
    "Ethical Value": 4,
  },
  {
    Name: "Locally made",
    Description:
      "This brand is a small business that serves its local community, rather than a large corporate audience.",
    "Real Name": "Small Business/Community Business",
    "Sustainability Value": 2,
    "Ethical Value": 2,
  },
  {
    Name: "Made to Order",
    Description:
      'This brand sells products that are "made to order," meaning that products are only produced as they\'re ordered, rather than in bulk. This limits waste during the production process.',
    "Real Name": "Made to Order Products",
    "Sustainability Value": 4,
    "Ethical Value": 0,
  },
  {
    Name: "Minimal Packaging",
    Description:
      "This brand minimizes wasteful packaging that accompanies its products.",
    "Real Name": "",
    "Sustainability Value": 3,
    "Ethical Value": 0,
  },
  {
    Name: "Natural and Sustainable Materials",
    Description:
      "This brand uses natural and sustainable materials in products, meaning that its products are constructed from natural fabrics or materials that sustainably farmed or constructed.",
    "Real Name": "",
    "Sustainability Value": 4,
    "Ethical Value": 0,
  },
  {
    Name: "Purchases Carbon Offsets",
    Description:
      'This brand provides monetary support to carbon emission reduction projects such as wind turbines by purchasing "carbon offsets" to compensate for their pollution.',
    "Real Name": "",
    "Sustainability Value": 4,
    "Ethical Value": 0,
  },
  {
    Name: "Recyclable Packaging",
    Description:
      "This brand provides recyclable packaging for its products. The packaging is not necessarily made from recycled materials, but can be recycled after use.",
    "Real Name": "",
    "Sustainability Value": 3,
    "Ethical Value": 0,
  },
  {
    Name: "Recycle Remnants",
    Description:
      "This brand recycles/reuses fabric or other material remnants from production, which helps avoid fabric waste in landfills.",
    "Real Name": "",
    "Sustainability Value": 3,
    "Ethical Value": 0,
  },
  {
    Name: "Recycled Packaging",
    Description:
      "This brand provides packaging made from recycled materials, but the packaging is not necessarily recyclable.",
    "Real Name": "",
    "Sustainability Value": 3,
    "Ethical Value": 0,
  },
  {
    Name: "Recycles",
    Description: "This brand participates in some recycling efforts.",
    "Real Name": "",
    "Sustainability Value": 2,
    "Ethical Value": 0,
  },
  {
    Name: "Safe and Fair Labor Standards",
    Description:
      "This brand supports safe and fair labor standards for its employees, thereby working to achieve safe and healthy workplaces.",
    "Real Name": "",
    "Sustainability Value": 0,
    "Ethical Value": 2,
  },
  {
    Name: "Support and promotes gender equality",
    Description:
      "This brand supports gender equality by providing opportunities for women in the workplace and reducing wage gaps between genders.",
    "Real Name": "",
    "Sustainability Value": 0,
    "Ethical Value": 1,
  },
  {
    Name: "Supports Accessibility",
    Description:
      "This brand takes steps to make their products more accessible to those with disabilities.",
    "Real Name": "",
    "Sustainability Value": 0,
    "Ethical Value": 1,
  },
  {
    Name: "Supports BLM",
    Description:
      "This brand has voiced public support for the Black Lives Matter (BLM) movement.",
    "Real Name": "",
    "Sustainability Value": 0,
    "Ethical Value": 1,
  },
  {
    Name: "Supports Education",
    Description:
      "This brand has devoted resources to educational causes such as schools, scholarships, or other forms of learning.",
    "Real Name": "",
    "Sustainability Value": 0,
    "Ethical Value": 1,
  },
  {
    Name: "Sustainable Cotton",
    Description: "This brand purchases cotton that is sustainably farmed.",
    "Real Name": "",
    "Sustainability Value": 3,
    "Ethical Value": 0,
  },
  {
    Name: "Upcycling",
    Description:
      "This brand transforms trash or other waste products into entirely new or restored products (essentially 'trash to treasure'). This kind of practice reduces waste sent to landfills.",
    "Real Name": "",
    "Sustainability Value": 3,
    "Ethical Value": 0,
  },
  {
    Name: "Uses Solar Power",
    Description:
      "This brand's facilities utilize or produce solar power, which is a clean, renewable energy source.",
    "Real Name": "",
    "Sustainability Value": 3,
    "Ethical Value": 0,
  },
  {
    Name: "Zero waste practices",
    Description:
      "This brand doesn't create any waste during its production process. This means that the brand has limited wasteful byproducts, recycles what it doesn't use, and/or composts unused components.",
    "Real Name": "",
    "Sustainability Value": 4,
    "Ethical Value": 0,
  },
  {
    Name: "Does Not Use Fur/Exotic Animal Skins",
    Description:
      "This brand does not incorporate fur or exotic animal skins into its clothing, which reduces threats to endangered animals valued for their furs.",
    "Real Name": "",
    "Sustainability Value": 1,
    "Ethical Value": 0,
  },
  {
    Name: "Chitosan",
    Description:
      "This brand uses chitosan in its textile production, which is a fully biodegradable material created from crabmeat waste. This means that chitosan based clothes break down quickly and are 'recycled' from waste materials.",
    "Real Name": "",
    "Sustainability Value": 3,
    "Ethical Value": 0,
  },
  {
    Name: "Organic Cotton",
    Description:
      "This brand claims to use organic cotton, though this organic cotton is not certified.",
    "Real Name": "",
    "Sustainability Value": 2,
    "Ethical Value": 0,
  },
  {
    Name: "Zero Liquid Discharge Practices",
    Description:
      "This brand discharges no wastewater into the surrounding environment during its production processes. The wastewater is instead recycled and reused in the industrial process.",
    "Real Name": "",
    "Sustainability Value": 3,
    "Ethical Value": 0,
  },
  {
    Name: "Restricted Substance List",
    Description:
      "This brand restricts the use of certain chemicals in the manufacturing of its products. A Restricted Substance List can adhere to government regulations to protect consumers or go above what governments have specified.",
    "Real Name": "",
    "Sustainability Value": 3,
    "Ethical Value": 0,
  },
  {
    Name: "Woman Leadership",
    Description:
      "This brand has owners, leaders, or executives that are women.",
    "Real Name": "",
    "Sustainability Value": 0,
    "Ethical Value": 1,
  },
  {
    Name: "Supports Charities",
    Description:
      "This brand supports charity efforts. Supporting charity efforts could mean supplying finances, supply, or manpower to a charitable cause.",
    "Real Name": "",
    "Sustainability Value": 0,
    "Ethical Value": 2,
  },
  {
    Name: "Environmental Sustainability Plan",
    Description:
      "This brand has a plan to become environmentally sustainable by a future date, but has not yet met those goals.",
    "Real Name": "",
    "Sustainability Value": 2,
    "Ethical Value": 0,
  },
  {
    Name: "Recycled Materials",
    Description:
      "This brand uses recycled materials in its production process.",
    "Real Name": "",
    "Sustainability Value": 2,
    "Ethical Value": 0,
  },
  {
    Name: "Reduced Gender Pay Gap",
    Description:
      "This brand has actively reduced the pay gap between genders, meaning that men and women receive closer to the same wage for the same job.",
    "Real Name": "",
    "Sustainability Value": 2,
    "Ethical Value": 0,
  },
  {
    Name: "Anti-Slavery and Human Trafficking Policy",
    Description:
      "This brand has an established policy that condemns slavery and human trafficking throughout its supply line.",
    "Real Name": "",
    "Sustainability Value": 1,
    "Ethical Value": 0,
  },
  {
    Name: "Plant-Based Materials",
    Description:
      "This brand utilizes natural plant-based materials in its production.",
    "Real Name": "",
    "Sustainability Value": 2,
    "Ethical Value": 0,
  },
  {
    Name: "Worker Empowerment",
    Description:
      "This brand supports the empowerment of its workers, including workers' rights to collective bargaining and freedom of association with trade unions.",
    "Real Name": "",
    "Sustainability Value": 3,
    "Ethical Value": 0,
  },
  {
    Name: "renewable energy",
    Description:
      "This brand uses renewable energy in its facilities and/or production process.",
    "Real Name": "",
    "Sustainability Value": 2,
    "Ethical Value": 0,
  },
  {
    Name: "eco-friendly shipping",
    Description:
      "This brand has eco-friendly shipping that may consist of cleaner transportation methods, biodegradable shipping materials, or other eco-friendly practices.",
    "Real Name": "Eco-friendly shipping",
    "Sustainability Value": 3,
    "Ethical Value": 0,
  },
  {
    Name: "vegan - no animal at all",
    Description:
      "This brand has vegan products, which means that animals and animal byproducts are not involved in the production process or the products themselves.",
    "Real Name": "Vegan Products",
    "Sustainability Value": 1,
    "Ethical Value": 1,
  },
  {
    Name: "Made in USA",
    Description: "This brand's products are produced exclusively in the USA.",
    "Real Name": "",
    "Sustainability Value": 1,
    "Ethical Value": 1,
  },
  {
    Name: "High Proportion of Eco-Friendly Materials",
    Description: "",
    "Real Name": "",
    "Sustainability Value": 4,
    "Ethical Value": 0,
  },
  {
    Name:
      "Policy to Prevent Deforestation of Ancient and Endangered Forests in its Supply Chain",
    Description:
      "This brand has a policy that assures the prevention of deforestation in the production of its goods. This means it is against practices that result in loss of trees and other other forest wildlife.",
    "Real Name": "",
    "Sustainability Value": 2,
    "Ethical Value": 0,
  },
  {
    Name: "Encourages Sustainable Users",
    Description:
      "This brand has programs that encourages its users to be more sustainable in their day-to-day life.",
    "Real Name": "",
    "Sustainability Value": 2,
    "Ethical Value": 0,
  },
  {
    Name: "Formal Statement Covering Workers Rights",
    Description:
      "This brand is transparent on the rights of its workers, meaning that they provide that information to the public.",
    "Real Name": "",
    "Sustainability Value": 0,
    "Ethical Value": 2,
  },
  {
    Name: "Plan to Reduce Greenhouse Gas Emissions",
    Description:
      "This brand has a plan to reduce greenhouse gas emissions, meaning that it seeks to reduce its carbon footprint in the future, but may still have yet to make progress.",
    "Real Name": "",
    "Sustainability Value": 2,
    "Ethical Value": 0,
  },
  {
    Name: "Uses Non-Toxic Dyes",
    Description:
      "The dyes used by this brand are guaranteed to be non-toxic to humans.",
    "Real Name": "",
    "Sustainability Value": 3,
    "Ethical Value": 3,
  },
  {
    Name: "Traces Most of Supply Chain",
    Description:
      "This brand traces most (but not all) of its supply chain to make sure none of its suppliers are not engaging in unethical practices.",
    "Real Name": "",
    "Sustainability Value": 3,
    "Ethical Value": 3,
  },
  {
    Name: "Water Reduction Initiatives",
    Description:
      "This brand seeks to reduce its water consumption during its production process.",
    "Real Name": "",
    "Sustainability Value": 2,
    "Ethical Value": 0,
  },
  {
    Name: "Above-Minimum Wages",
    Description:
      "This brand pays all its workers a wage that is above minimum wage in the regions where they operate.",
    "Real Name": "",
    "Sustainability Value": 0,
    "Ethical Value": 4,
  },
  {
    Name: "Plan to Reduce Deforestation",
    Description:
      "This brand has a plan to reduce deforestation—otherwise known as protecting forest and reducing wildlife destruction—but may not have made progress yet.",
    "Real Name": "",
    "Sustainability Value": 2,
    "Ethical Value": 0,
  },
  {
    Name: "Working to Eliminate Hazardous Chemicals",
    Description:
      "This brand is actively working to eliminate hazardous materials used in its production process.",
    "Real Name": "",
    "Sustainability Value": 2,
    "Ethical Value": 2,
  },
  {
    Name: "good animal rating",
    Description:
      "This brand treats animals with dignity and respect, attending to their needs and ensuring humane conditions.",
    "Real Name": "Proper Treatment of Animals",
    "Sustainability Value": 0,
    "Ethical Value": 1,
  },
  {
    Name: "wool from non-mulesed sheep",
    Description:
      "This brand does not subject sheep to the practice of mulesing, which is a surgical procedure that can be considered inhumane, but can also be critical in protecting sheep from disease.",
    "Real Name": "Wool from non-mulesed sheep",
    "Sustainability Value": 0,
    "Ethical Value": 1,
  },
  {
    Name: "Limited Amount of Chemicals and Wastewater Used in Production",
    Description:
      "This brand has limited the amount of chemical wastewater produced by its factories, thereby reducing potential environmental impact on the surrounding areas and water sources.",
    "Real Name": "",
    "Sustainability Value": 3,
    "Ethical Value": 3,
  },
  {
    Name: "Most Production Undertaken in USA",
    Description:
      "This brand largely produces in the USA only, though it has some overseas production in its supply chain.",
    "Real Name": "",
    "Sustainability Value": 0,
    "Ethical Value": 2,
  },
  {
    Name: "Greenhouse Gas Reductions",
    Description:
      "This brand has actively reduced its greenhouse gas emissions.",
    "Real Name": "",
    "Sustainability Value": 3,
    "Ethical Value": 0,
  },
  {
    Name: "minimise textile waste",
    Description:
      "This brand has made efforts to minimize textile waste in its production, meaning that it sends fewer articles of clothing to landfills.",
    "Real Name": "Minimizes Textile Waste",
    "Sustainability Value": 3,
    "Ethical Value": 0,
  },
  {
    Name: "basic formal policy to protect animal welfare",
    Description:
      "This brand has a transparent, formal policy that outlines its standards for protecting animals and maintaining animal welfare",
    "Real Name": "",
    "Sustainability Value": 0,
    "Ethical Value": 1,
  },
];

const redFlags = [
  {
    Name: "Heavy Polluter",
    Notes: "This brand is known to be a significant source of pollutants.",
    Source: "",
    Deduction: -8,
  },
  {
    Name: "Mistreats Workers",
    Notes:
      "This brand is known to deny its workers critical fair labor rights including fair wages, fair hours, right to association and collective bargaining, and more.",
    Source: "",
    Deduction: -8,
  },
  {
    Name: "Unsustainable Practices",
    Notes:
      "This brand has unsustainable practices, potentially involving the excessive consumption or pollution of resources.",
    Source: "",
    Deduction: -4,
  },
  {
    Name: "Fast Fashion",
    Notes:
      "This brand caters to trends, meaning that it produces clothes to only be used or last for a short time. This means that the products outlive their lifespan quickly and significant quantities of textiles end up in landfills.",
    Source: "",
    Deduction: -4,
  },
  {
    Name: "Discriminatory Policies/Practices",
    Notes:
      "This brand has policies and practices that are known to be discriminatory against vulnerable populations.",
    Source: "",
    Deduction: -8,
  },
  {
    Name: "Politically Misaligned",
    Notes:
      "This brand has aligned itself with corrupt or unethical political institutions. This alignment is determined through its donations or public support for causes.",
    Source: "",
    Deduction: -4,
  },
  {
    Name: "Wasteful Packaging",
    Notes:
      "This brand uses packaging for its products that is particularly wasteful of resources or harmful to the environment.",
    Source: "",
    Deduction: -2,
  },
  {
    Name: "Poor Customer Service",
    Notes:
      "This brand is known to leave its customers dissatisfied and unhappy with its products, and insufficiently attends to customer needs.",
    Source: "",
    Deduction: -2,
  },
  {
    Name: "Monopoly",
    Notes:
      "This brand has crowded out competition, which gives it excessive and unfair power in the market and industry.",
    Source: "",
    Deduction: -4,
  },
  {
    Name: "Inaccessible",
    Notes:
      "This brand has not made efforts to make its websites, tools, or facilities accessible to people with disabilities.",
    Source: "",
    Deduction: -8,
  },
  {
    Name: "Mistreats Women",
    Notes:
      "This brand has a history of sexual harassment and discrimination against women.",
    Source: "",
    Deduction: -8,
  },
  {
    Name: "Intentionally Addictive/Wasteful",
    Notes:
      "This brand produces products that are intentionally addictive or wasteful to force consumers to purchase more of its products.",
    Source: "",
    Deduction: -4,
  },
  {
    Name: "Profits Off War/Violence",
    Notes:
      "This brand has capitalized on war and violence, using misfortunes to essentially market or force people to buy their products.",
    Source: "",
    Deduction: -8,
  },
  {
    Name: "Partners with Discriminatory Agents",
    Notes:
      "This brand has partnered with or sold to discriminatory agents that promote oppression of vulnerable groups.",
    Source: "",
    Deduction: -4,
  },
  {
    Name: "Privacy Violations",
    Notes:
      "This brand has violated its customers' privacy by abusing or selling their data.",
    Source: "",
    Deduction: -4,
  },
  {
    Name: "Deforestation Practices",
    Notes:
      "This brand is known to participate in deforestation that significantly reduce biodiversity in the pursuit of optimized profit.",
    Source: "",
    Deduction: -4,
  },
  {
    Name: "Exploitive Prices",
    Notes:
      "This brand sets excessively high prices for goods that consumers require and cannot purchase elsewhere.",
    Source: "",
    Deduction: -4,
  },
  {
    Name: "Spreads Misinformation",
    Notes:
      "This brand spreads factually inaccurate information in the hope of manipulating consumers' opinions.",
    Source: "",
    Deduction: -2,
  },
  {
    Name: "Lack of Info",
    Notes:
      "There is little available information about this brand, meaning that it is not forthcoming about its practices",
    Source: "",
    Deduction: -2,
  },
  {
    Name: "Low Fashion Transparency Index",
    Notes:
      "This brand has a low transparency index, which means that it does disclose sufficient information about its sustainability efforts, social views, and ethical practices.",
    Source: "https://www.fashionrevolution.org/about/transparency/",
    Deduction: -2,
  },
  {
    Name: "No Policy to Reduce Greenhouse Gas Emissions",
    Notes:
      "This brand has not acknowledged the threat of climate change and greenhouse gases, and has no instituted a policy to reduce them.",
    Source: "",
    Deduction: -2,
  },
  {
    Name: "No Labor Standard Certifications",
    Notes:
      "This brand's treatment of its workers has not been evaluated or audited by credible third parties, so there is no assurance that workers are treated fairly.",
    Source: "",
    Deduction: -2,
  },
  {
    Name: "Tax Avoidance",
    Notes:
      "This brand actively seeks to avoid taxes through corporate loopholes.",
    Source: "",
    Deduction: -4,
  },
  {
    Name: "Does Not Limit Toxic Chemicals in Production",
    Notes:
      "This brand has no policies to limit the use of toxic chemicals in its production, meaning that it could be poisoning consumers or the environment with these chemicals.",
    Source: "",
    Deduction: -2,
  },
  {
    Name: "Exotic Animal Skin/Fur",
    Notes:
      "This brand produces products that contain exotic animal skin/fur, which can pose threats to endangered animals.",
    Source: "",
    Deduction: -4,
  },
  {
    Name: "Does Not Use Eco-Friendly Materials",
    Notes:
      "This brand has offered no proof of eco-friendly practices, thereby showing little regard for the deteriorating state of the environment.",
    Source: "",
    Deduction: -2,
  },
  {
    Name: "Uses Leather and Wool",
    Notes:
      "This brand uses leather and wool—materials commonly (though not always) associated with the mistreatment of animals.",
    Source: "",
    Deduction: -2,
  },
  {
    Name: "Mistreats Animals",
    Notes:
      "This brand does not treat its animals humanely, exposing them to unnecessary harm or harmful living conditions.",
    Source: "",
    Deduction: -4,
  },
  {
    Name: "Few Eco-Friendly Materials",
    Notes:
      "This brand has not sufficiently committed to the use of eco-friendly materials, and barely uses any environmentally sustainable materials in its production process.",
    Source: "",
    Deduction: -2,
  },
];

// run the script
const gradedBrands = gradeBrands();
var myJSON = JSON.stringify(gradedBrands);
console.log(myJSON)