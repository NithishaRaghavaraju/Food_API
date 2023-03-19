require("dotenv").config()
const openai_api_key = "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"
export const RecipeMethod = async (prompt)=>{

   const params_ = { 
       model: "text-davinci-003",
       prompt: prompt + "recipe details",
       temperature: 0.9,
       max_tokens: 500,
       top_p: 1,
       frequency_penalty: 0,
       presence_penalty: 0,
    };
   const requestOptions = {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
       'Authorization': 'Bearer ' + String(openai_api_key)
     },
     body: JSON.stringify(params_)
   };
  const response = await fetch('https://api.openai.com/v1/completions', requestOptions);
  const data = await response.json();
  return data.choices[0].text.trim()


 }