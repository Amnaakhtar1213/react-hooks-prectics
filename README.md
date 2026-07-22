## USESTATE-PROJECT ( Basic-level)


THIS is notes of *REACT*, I MADE .HERE I LEARN HOW TO USE USESTATE, AND WHAT FOR USESTATE IS .
USESTATE IS CHANGE THINGS OR NUMBER FROM ONE STATE TO ANOTHER STATE, USEeFFECT AND REAMAINIGN THINGS I HAVE LEARN YET ABOUT **REACT**

## points 

- FIRST import USESTATE THAT IF YOU WANT TO USE USESTATE on the top  .(ALONG WITH REACT)
- THEN USE USESTATE LIKE 
- (CONST [#, SET#] = useState(INITIAL VALUE))

  -   LIKE IN COUNTER WE USE 
          - const [num, setNum] = useState(0)
          - 
- AFTER THIS MAKE A FUNCTION AND IN FUNCTION DECLARE SET#  AND INCREASE IN NUM STATE.
like in function 
function increment(){
  setNum(num+1)
}
- SETfUNCTION (num, `setNum`) IS ASYNCRONYS FUNCTION
- setNum is used to display anything on screen, on page .
- console.log display on console.


## how to use state in function 

- initial value is 0 we gave to num 
- then in setNum we use (here it means this is function we use to increament according to what we want with num)
- then num+1 mean 0+1... and so on ....
- every time we click button the count goes on ...

- we also use this to decrease the count 
jump to 5 and so on ....

---------------------------------

## ADVANCE REACT 

previous method
const  user = {name:"amiou", age:34}

newUser(prev => ({...prev, user:"lulalu"}))

------------------------

## formHandling
just make a function and delare in form .a form include input and btn when btn click form is submitted.
to prevent from page reloading
pass e in function and in form tooo
and e.preventDefault prevent page reloading 

-----------------

## data-binding 

all about input tag

<input type="input"
placeholder="enter name"
value={title}  [useState value] see on input
onChange={(e) => {       [show input change console]
setTitle(e.target.value)  [useState setvalue]
}}        
/>

end to clear input itelf use setTitle("")



------------------------

### SESSION STORAGE:
IT STAY ONLY WHEN PAGE OPEN LIKE SESSION WHEN SESSION CLOSE THE DATA GO AND EVEN WE OPEN THE PAGE AGAIN THE DATA IS NO LONGER .THAT CALLED SESSION STORAGE (DATA ONLY FOR THAT TIME)


### LOCAL STORAGE:
THE DATA STAY EVEN  WE RELOAD THE PAGE OR LEAVE THE PAGE OR CLOSE THE SERVER THE DATA STAY FOR LONG TIME .

## HOW TO SET DATA IN LOCAL STAORAGE:

HOW TO SET DATA IN LOCAL STORAGE....

- USING SET DATA TO SET THE DATA LIKE 
  `localStorage.setItem("data", data)`

HOW TO GET DATA FROM LOCAL STORAGE...

- useing gat data like 
  `localStorage.getItem("data", data)`

HOW TO REMOVE any DATA form array or object

- USEING REMOVE ITEM LIKE 
  `localStorage.removeItem("data")`

HOW TO CLEAR LOCAL STORAGE

- using clear item like
   `localStorage.clear()`


--------------------------------

user will be = {any object} or [any array]

in local storage always keep data in string
now if we give data in the form of array or object then how to convert it in the form of string 

- convert into string
  
`localStorage.setItem("user", JSON.stringify(user))`

- convert into back to array or string

`JSON.parse(localStorage.getItem("user"))`

- to check the type of data 
`consol.log(typeOf(user))`

------------------------

## API CALLING  first type of calling API.

MAKE A FUNCTION first make that function asyncrious then fetch the api and then api has to wait untill it get full data we add await .and then console it 

like we make function to get data from api

`function getData() {
     const response = fetch("any api)
     console.log(response)
}`

this is normal function where we just call api now first make the function asyncrious
the await the fetch api 
then the fetch data is in json format so we use .json like
 
 ` async function getData() {
     const response = await fetch("any api)
     const data = await response.json()
     console.log(data)
}`

----------------------

## USE EFFECT

we use useEffect to carry more task with original task like if truck is driving in the middle of road that i task .and some more data wait in footpath .now when truck goes farward the newdata is go farward with help of useeffects
it has dependencies too where that  new data do in the array form 

`useEffect(function(){
  some function here which you want to do 
}, [here came dependencies])`

## AXIOS 

IT WORK IS THAT I FETCH API DATA 

DATA CAME FROM BACKEND VIA API IN THE FORM OF JSON, LIKE AN ARRAY...[{}, {}, {}]

- IN AXIOS 
      - first we install axios in terminal
      - import in any jsx file
      - in function where you wanted to set api calll axios.
      - after calling axios then now it time to get data from api axios.get("here is api http") 
      - then data come in promises then you need to make a function asyncrounous 
      - then make a function async and await the api 
      - then print in return  useState set function to print data on screen 

- `const getData = async () => {
  const response = await axios.get("api here")
  return setData(response)}`
        
  LIKE THIS YPU CAN GET DATA FROM ANY API ...



  ----------------------------------

  ## gallery project revision.
first declare useState set its value and equal to useState then import too 
then import useEffect too 

  first make a function whose calling api 
  make function calling api then make this function async  and await the api then setData(in api const)

  in useEffect function declare the function an dit has dependencies too 

  then in ui design make full setup but in the place of api 
  use {in there all div make make all ui design }
in button make a onClick function
