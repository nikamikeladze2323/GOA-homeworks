# 2) გააკეთეთ random student generator რომელსაც გადაეცემა ჯგუფის მოსწავლეებით სავსე სია და დაგვიბრუნებს რენდომულად განაწილებულ გუნდებს მზგავსად როგორც გავაკეთეთ წინა გაკვეთილზე 

import random

def generate_teams(students, team_size):
    random.shuffle(students)  
    teams = [students[i:i + team_size] for i in range(0, len(students), team_size)]
    return teams

students_list = ["ნიკოლოზი", "მარი", "ლევანი", "გიორგი", "თამარი", "საბა", "ელენე", "დათო", "ლიკა", "სანდრო"]

team_size = 3

teams = generate_teams(students_list, team_size)

for i, team in enumerate(teams, 1):
    print(f"გუნდი {i}: {team}")
