// 2)შექმენი სია სადაც რენდომულად შეიყვან რამდენიმე სახელს და გვარს , შემდეგ დაწერე ფუნქცია რომელიც დააბუნებს ახალ სიას სადაც წარმოდგენილი იქნება თითოეული სახელი და გვარი ისე როგორც ინიციალები (Giorgi Bibilashvili => G.B)2)შექმენი სია სადაც რენდომულად შეიყვან რამდენიმე სახელს და გვარს , შემდეგ დაწერე ფუნქცია რომელიც დააბუნებს ახალ სიას სადაც წარმოდგენილი იქნება თითოეული სახელი და გვარი ისე როგორც ინიციალები (Giorgi Bibilashvili => G.B)

const names = ["Giorgi Bibilashvili", "Nino Gvasalia", "Luka Davitashvili", "Ana Metreveli", "Davit Tsiklauri"];

const getInitials = names.map(fullName => {
    const [firstName, lastName] = fullName.split(" "); 
    return `${firstName.charAt(0)}.${lastName.charAt(0)}`; 
});

console.log(getInitials); 
