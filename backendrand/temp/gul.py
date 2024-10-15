from g4f import ChatCompletion


def create_stream_response():
    attempts = 0
    res = {"text": ''}

    while attempts < 3:
        try:
      
            response = ChatCompletion.create(**params)
            # response = self.g4f.ChatCompletion.create(**params)
            if response is None:
                raise ValueError("ChatCompletion.create returned None")
            for chunk in response:
                if any(error_response in chunk for error_response in self.errors_response):
                    attempts += 1
                    break
                res["text"] += chunk
                completion_data["messageAi"]["text"] = chunk
                content = json.dumps(completion_data, separators=(',', ':'))
                print(completion_data)
                yield f'{content} \n'

            saved_end_data = save_data_in_db(self.valid_request, res)
            saved_end_data["messageAi"]["text"] = ""
            content = json.dumps(saved_end_data, separators=(',', ':'))
            yield f'{content} \n'
            break
        except (RuntimeError, Exception) as e:
            print(f"Error {e}")
            print(f"Error during generate (Attempt {attempts + 1}/{self.max_attempts})")
            attempts += 1
            continue
        finally:
            if self.webdriver:
                self.webdriver.quit() 

