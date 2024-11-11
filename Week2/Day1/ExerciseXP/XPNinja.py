class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.message = []

    def call(self, other_phone):
        call_record = {
            'from': self.phone_number,
            'to': self.other_phone
            }
        self.call_history.append(call_record)
        return f'Calling {other_phone} from {self.phone_number}'

    def show_call_history(self):
        for call in self.call_history:
            print(f'Call history: from {call['from'] to {call['to']}'})

    def send_message(self, from_phone, to_phone, message):
        message_record = {
            'from' : self.phone_number,
            'to' : other_phone,
            'message': message
        }
        self.message_history.append(message_record)
        return self

    def show_outgoing_message(self)
        for message in message_history:
            dict_sms = {keys, values}
            keys = ['outgoing', 'message']
            values = [self.to_phone, self.message]
        return self

    def show_incoming_message(self)
       for message in message_history:
            dict_sms = {keys, values}
            keys = ['incoming', 'message']
            values = [self.show_from_phone, self.message]
        return self


    def show_messages_from(self)
     print(f'here is all your messages: {self.message}.')

phone_1 = Phone('053.530.71.65')
phone_2 = Phone('051.527.13.35')
