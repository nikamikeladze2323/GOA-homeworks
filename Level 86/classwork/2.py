# 18)შექმენი ფუნქცია და გადაეცი პარამეტრად ცვლადი და არგუმენტად გადაეცი სია,შენი დავალებაა გამოიტანო ლუწ ინდექსზე მდგომი რიცხვების ჯამი
def sum1(listt):
    res = []
    for i in range(len(listt)):
        if i % 2 == 0:
            res.append(listt[i])
    return sum(res)        


print(sum1([12, 33, 35, 42, 50, 67, 88]))