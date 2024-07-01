const { WatsonXAI } = require('@ibm-cloud/watsonx-ai');

// Service instance
let watsonxAIService;

process.env.IBM_CREDENTIALS_FILE = "./.env"

watsonxAIService = WatsonXAI.newInstance({
    version: '2024-05-31',
    serviceUrl: 'https://us-south.ml.cloud.ibm.com',
});

const textGenRequestParametersModel = {
    max_new_tokens: 2000,
};
const journalEntry = {
    year: 1965,
    place: "the beach",
    companions: ["George", "Sarah", "Linda"],
    activity: "Picnic and playing games",
    specialMemory: "Building a magnificent sandcastle and singing around the bonfire",
    details: {
      dress: "a favorite blue dress",
      food: "egg salad sandwiches with a touch of mustard",
      drink: "homemade lemonade",
    },
  };
const params = {
    input: `Based on ${JSON.stringify(journalEntry)} create a story like narration for remembering that day for the user in a third person narrative style like 'Do you remember'.`,
    modelId: 'meta-llama/llama-2-70b-chat',
    projectId: '068f3e1c-abee-442e-8de6-d9109f80085b',
    parameters: textGenRequestParametersModel,
};

try {
    const textGeneration = watsonxAIService
    .textGeneration(params)
    .then((res) => {
        console.log("\n\n***** TEXT RESPONSE FROM MODEL *****");
        console.log(res.result.results[0].generated_text);
    })
} catch (err) {
    console.warn(err);
}