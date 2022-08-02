// import { ChangeEventHandler } from "react";
// import { v4 as uuidv4 } from "uuid";

// interface UserInterface {
//   name: string;
//   userName: string;
//   userId: string;
//   email: string;
//   birthDate: string;
//   country: string;
//   password: string;
//   cPassword?: string;
// }
// const userId = uuidv4();
// const user: UserInterface = {
//   name: "",
//   userName: "",
//   userId: userId,
//   email: "",
//   birthDate: "",
//   country: "",
//   password: "",
// };

// const handlers = {
//   email: function onEmailChange(event: any) {
//     user.email = event.target.value;
//     setUserObj(user);
//   },
//   psw: function onPasswordChange(
//     event: any,
//     state: Function
//   ): ChangeEventHandler<HTMLInputElement> | undefined {
//     user.password = event.target.value;
//     state(user);
//   },
//   username: function onUserNameChange(event: any) {
//     user.userName = event.target.value;
//     setUserObj(user);
//   },
//   name: function onNameChange(event: any) {
//     user.name = event.target.value;
//     setUserObj(user);
//   },
//   birth: function onBirthChange(event: any) {
//     user.birthDate = event.target.value;
//     setUserObj(user);
//   },
//   country: function onCountryChange(event: any) {
//     user.country = event.target.value;
//     setUserObj(user);
//   },
// };

// export default handlers;
