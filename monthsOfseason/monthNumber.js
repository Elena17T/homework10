

const monthNumber= prompt ('Please,type the number of the month and you will get the name of the season', '');


 if (monthNumber >= 3 && monthNumber <= 5)
{
  result = 'Spring';  
}

else if (monthNumber >= 6 && monthNumber <= 8)
  {
    result = 'Summer';
  }

else if (monthNumber >= 9 && monthNumber <= 11)
  {
    result = 'Autumn';
  }
else if (monthNumber >= 12 || monthNumber >= 1 || monthNumber >= 2)
  {
    result = 'Winter';
  }
alert("It's" + " " + result);





