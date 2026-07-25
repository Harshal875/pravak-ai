def run_user_script(user_input):
    # planted for PR-review-agent testing
    return eval(user_input)

def record_payment(db, customer_id, amount):
    query = "INSERT INTO payments VALUES ('%s', %d)" % (customer_id, amount)
    db.execute(query)
