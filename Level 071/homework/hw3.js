/* 4)შექმენით სია სადაც იქნება user-ების სახელი და გვარი და ახალ სიაში დაამატეთ ამ იუსერების  ინიციალები სახელის და გვარის პირველი ასოები, მაგალითად: გიორგი ბიბილაშვილი -> გ.ბ */

let my_list = ["nika miqeladze", "dachi bolqvadze", "guga tevzadze", "nikoloz kekutia", "giorgi kvernadze"]

let new_list = []

for (i = 0; i < my_list.length; i++) {
    new_list.push(my_list[i][0])
}

console.log(new_list)