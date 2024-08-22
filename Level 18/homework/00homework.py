rule_number_1 = "You cant eat fast food in the camp!"
rule_number_2 = "Listen your teacher and dont be a bad boy!"
rule_number_3 = "Help your camp friends and dont bully them!"
rule_number_4 = "Wake up in the morning at 7 AM and sleep at 10 PM"
rule_number_5 = "All of you have to participate in the activities"

print("Welcome to the our camp in our camp rules are simple")
print("1.", (rule_number_1))
print("2.", (rule_number_2))
print("3.", (rule_number_3))
print("4.", (rule_number_4))
print("5.", (rule_number_5))
question = input("Got it: ")


if question == "yes":
    answer = input("Ok tell me than what i say: ") 

elif question != "yes":
    print("Are you dumb answer my question")



if answer != rule_number_1:
    print("You did not listen to me")
elif answer != rule_number_2:
    print("print did not listen to me")    
elif answer != rule_number_3:
    print("You did not listen to me")
elif answer != rule_number_4:
    print("You did not listen to me")
elif answer != rule_number_5:
    print("You did not listen to me")
else:
    print("Good job now you may enter in our camp :)")