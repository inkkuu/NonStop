function jarjestys()
{
  var luku1, luku2, luku3;
  luku1 = parseInt(document.getElementById('eka').value);
  luku2 = parseInt(document.getElementById('toka').value);
  luku3 = parseInt(document.getElementById('kolmas').value);
  document.write("Annoit luvut: " + luku1 + ' ' + luku2 + ' ' + luku3 + "<br>");
  if(luku1 < luku2 && luku1 < luku3)
  {
    if(luku2 < luku3)
    {
      document.write("Lukujen järjestys: " + luku1 + ' ' + luku2 + ' ' + luku3);
    }
    else {
      document.write("Lukujen järjestys: " + luku1 + ' ' + luku3 + ' ' + luku2);
    }
  }
  else if(luku2 < luku1 && luku2 < luku3)
  {
    if(luku1<luku3)
    {
      document.write("Lukujen järjestys: " + luku2 + ' ' + luku1 + ' ' + luku3);
    }
    else {
      document.write("Lukujen järjestys: " + luku2 + ' ' + luku3 + ' ' + luku1);

    }
  }
  else if(luku3 < luku1 && luku3 < luku2)
    {
      if(luku1 < luku2)
      {
        document.write("Lukujen järjestys: " + luku3 + ' ' + luku1 + ' ' + luku2);
      }
      else {
        document.write("Lukujen järjestys: " + luku3 + ' ' + luku2 + ' ' + luku1);

      }
    }
  }
  function suurin()
  {
    var l1, l2, l3, l4, l5, suurin;
    l1 = parseInt(document.getElementById('luku1').value);
    l2 = parseInt(document.getElementById('luku2').value);
    l3 = parseInt(document.getElementById('luku3').value);
    l4 = parseInt(document.getElementById('luku4').value);
    l5 = parseInt(document.getElementById('luku5').value);
    if(l1 < l2 && l3 < l2 && l4 < l2 && l5 < l2)
    {
      suurin = l2;
    }
    else if(l1 < l3 && l4 < l3 && l5 < l3)
    {
      suurin = l3;
    }
    else if(l1 < l4 && l5 < l4)
    {
      suurin = l4;
    }
    else if(l1 < l5)
    {
      suurin = l5;
    }
    else {
      suurin = l1;
    }
    document.write("Annoit luvut: " + l1 + ' ' + l2 + ' ' + l3 + ' ' + l4 + ' ' + l5);
    document.write("<br>Suurin niistä on: " + suurin);
  }
