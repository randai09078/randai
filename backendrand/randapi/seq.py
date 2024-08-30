from g4f.client import Client

# Initialize the client
client = Client()

# Define the input
inputs = {'research_topic': 'JavaScript language'}

# Define the agent and notes
agent = """
"""
notes = """
Notes: (Start your answering directly without welcome, warning, notes, or warning or word sure. I just want to answer the question, without any side talk)
"""

# Define the tasks

introduction_task = "Introduce the research topic {research_topic}, provide background information, and explain the motivation for the study."
study_problem_task = "Clearly define the problem or research gap that the study on {research_topic} aims to address."
objectives_task = "List the specific objectives or research questions that guided the study on {research_topic}."
study_questions_task = "Outline the key research questions or hypotheses investigated in the study on {research_topic}."
importance_task = "Explain the significance and potential impact of the research topic {research_topic} or findings."
limitations_task = "Acknowledge any limitations or constraints of the research methodology or scope for the study on {research_topic}."
framework_task = "Describe the theoretical foundations or models that guided the research approach for the study on {research_topic}."
hypotheses_task = "State the hypotheses, if any, that were tested in the study on {research_topic}."
previous_studies_task = "Provide an overview of relevant prior research on {research_topic} and how the current study builds upon or differs from existing work."
methodology_task = "Describe the research design, data collection methods, and analytical techniques used in the study on {research_topic}."
analysis_task = "Present the key findings and results of the data analysis for the study on {research_topic}."
discussion_task = "Interpret the results of the study on {research_topic}, compare them with previous studies, and discuss their implications and significance."
recommendations_task = "Suggest practical applications, future research directions, or policy recommendations based on the findings of the study on {research_topic}."
conclusion_task = "Summarize the main conclusions and contributions of the research project on {research_topic}."
reviewer_task = "Acknowledge the individuals or organizations who reviewed or contributed to the research project on {research_topic}."

# Compile the tasks into a list
tasks = [
   
    introduction_task, study_problem_task,
    objectives_task, study_questions_task, importance_task, limitations_task, framework_task,
    hypotheses_task, previous_studies_task, methodology_task, analysis_task, discussion_task,
    recommendations_task, conclusion_task, reviewer_task
]

# Combine the agent and notes to form the system prompt
system_prompt = agent + notes

# Initialize the final response string
final_response = ""

# Initialize a list to keep track of the cumulative conversation
conversation_history = [{"role": "assistant", "content": system_prompt}]

# Loop through each task
for task in tasks:
    print("1")
    # Format the task with the research topic
    formatted_task = task.format(**inputs)
    
    # Append the user message to the conversation history
    conversation_history.append({"role": "user", "content": formatted_task})
    
    # Get the response from the client
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=conversation_history
    )
    print("response", response)
    
    # Extract the content from the response
    task_response = response.choices[0].message.content
    print("1")
    
    # Append the assistant's response to the conversation history
    conversation_history.append({"role": "assistant", "content": task_response})
    
    # Append the task and the response content to the final response
    final_response += f"### {formatted_task}\n\n{task_response}\n\n"

# Save the final response to a .md file
with open("f.md", "w") as file:
    file.write(final_response)
