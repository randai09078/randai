import csv
from g4f.client import Client

# Define the models and their corresponding function calls
models = {
    'gpt-3.5-turbo': 'gpt_35_turbo',
    'gpt-3.5-long': 'gpt_35_long',
    'gpt-4o': 'gpt_4o',
    'gpt-4o-mini': 'gpt_4o_mini',
    'gpt-4': 'gpt_4',
    'gpt-4-turbo': 'gpt_4_turbo',
    'meta-ai': 'meta',
    'llama-3-8b-instruct': 'llama_3_8b_instruct',
    'llama-3-70b-instruct': 'llama_3_70b_instruct',
    'llama-3-70b-chat': 'llama_3_70b_chat_hf',
    'llama-3.1-70b': 'llama_3_1_70b_instruct',
    'llama-3.1-405b': 'llama_3_1_405b_instruct_FP8',
    'mistral-7b-v02': 'mistral_7b_v02',
    'Nous-Hermes-2-Mixtral-8x7B-DPO': 'Nous_Hermes_2_Mixtral_8x7B_DPO',
    'Yi-1.5-34b-chat': 'Yi_1_5_34B_chat',
    'Phi-3-mini-4k-instruct': 'Phi_3_mini_4k_instruct',
    'gemini': 'gemini',
    'gemini-pro': 'gemini_pro',
    'gemini-flash': 'gemini_flash',
    'gemma-2b': 'gemma_2b_it',
    'gemma-2-9b': 'gemma_2_9b_it',
    'claude-2': 'claude_2',
    'claude-3-opus': 'claude_3_opus',
    'reka': 'reka_core',
    'nemotron-4-340b-instruct': 'nemotron_4_340b_instruct',
    'blackbox': 'blackbox',
    'command-r+': 'command_r_plus',
    'dbrx-instruct': 'dbrx_instruct',
    'gigachat': 'gigachat',
    'SparkDesk-v1.1': 'SparkDesk_v1_1',
    'deepseek-coder': 'deepseek_coder',
    'Qwen2-7b-instruct': 'Qwen2_7B_instruct',
    'glm4-9b-chat': 'glm4_9B_chat',
    'Yi-1.5-9b-chat': 'Yi_1_5_9B_chat',
    'pi': 'pi',
    'sdxl': 'sdxl',
    'stable-diffusion-3': 'stable_diffusion_3',
    'sdxl-lightning': 'sdxl_lightning_4step',
    'playground-v2.5': 'playground_v2_5_1024px_aesthetic',
}

# Initialize the Client
client = Client()

# Define the CSV file path
csv_file_path = 'models_responses.csv'

# Open the CSV file in write mode
with open(csv_file_path, mode='w', newline='') as csv_file:
    # Define the CSV writer
    csv_writer = csv.writer(csv_file)

    # Write the header row
    csv_writer.writerow(['mode', 'response'])

    # Loop through each model and generate the response
    for model_name, model_function in models.items():
        try:
            # Generate a response using the current model
            response = client.chat.completions.create(
                model=model_name,
                messages=[{"role": "user", "content": "Hello"}],
            )

            # Extract the response message
            response_text = response.choices[0].message.content
            print(f"Model: {model_name} | Response: {response_text}")

            # Write the model and response to the CSV file
            csv_writer.writerow([model_name, response_text])

        except Exception as e:
            # Handle errors and log them in the CSV
            print(f"Error with model {model_name}: {e}")
            csv_writer.writerow([model_name, f"Error: {e}"])

print(f"Responses saved to {csv_file_path}")

# from g4f.client import Client

# client = Client()
# response = client.images.generate(
#   model="dall-e-3",
#   prompt="a white siamese cat",

# )
# image_url = response.data[0].url


# # import g4f

# # # Setting up the request for image creation
# # response = g4f.ChatCompletion.create(
# #     model=g4f.models.default, # Using the default model
# #     provider=g4f.Provider.Ta, # Specifying the provider as Gemini
# #     messages=[{"role": "user", "content": "Create an image like this"}],
# #     image=open("/home/mohammed/Projects/backendrand/randapi/randai/logo.png", "rb"), # Image input can be a data URI, bytes, PIL Image, or IO object
# #     image_name="logo.png" # Optional: specifying the filename
# # )

# # # Displaying the response
# # print(response)