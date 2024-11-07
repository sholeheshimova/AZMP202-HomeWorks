// class Human{
//     constructor(name ,surname , age = 0, gender, nationality){
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//         this.gender = gender;
//         this.nationality = nationality;
//     }

//     getFullName(){
//         return `${this.name}  ${this.surname}`;
//     }

//     getBirthYear(){
//         const  Currentyear = new Date().getFullYear();
//         return Currentyear - this.age;
//     }
// }

// class User extends Human {
//     constructor(name,surname,age = 0,gender,nationality, username,email,isAdmin,isLogged,password,bio){
//         super(name,surname,age,gender,nationality);
//         this.username = username;
//         this.email = email;
//         this.isAdmin = false;
//         this.isLogged = false;
//         this.password = password;
//         this.bio = bio;
//     }

//     changePassword(currentPassword, newPassword){
//         if (currentPassword === newPassword) {
//             return "new password and current password are the same "
//         }
//     }

//     changeEmail(users , newEmail){
        
//     }
// }