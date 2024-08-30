import pyodbc

# Define the connection parameters
server = '174.138.187.58'  # Replace with your SQL Server instance name or IP address
database = 'your_database_name'  # Replace with your database name
username = 'NewUser'  # Replace with the SQL Server login (user) you created
password = 'StrongPassword123'  # Replace with the password for the SQL Server login

# Create a connection string
conn_str = f'DRIVER={{SQL Server}};SERVER={server};DATABASE={database};UID={username};PWD={password}'

try:
    # Establish a connection
    conn = pyodbc.connect(conn_str)

    # Create a cursor
    cursor = conn.cursor()

    # Example query
    cursor.execute('SELECT @@version;')

    # Fetch and print results
    row = cursor.fetchone()
    print('SQL Server version:', row[0])

    # Close cursor and connection
    cursor.close()
    conn.close()

except Exception as e:
    print('Error connecting to SQL Server:', e)
