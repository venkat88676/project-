//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
DataUser="abcd@gmail.com";
DataPassword="abcd123";
user="abd@gmail.com"
password="abcd123"
if (user==DataUser)
{
  if (password==DataPassword) console.log("successfully login")
  else console.log("Incorrect password")
}
else console.log("Incorrect credential")