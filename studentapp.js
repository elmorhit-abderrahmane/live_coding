$(document).ready(function () {
    var studentsList;
    function getall() {
      $(".studentsList").html(" ");
      $.ajax({

        url: "api/getstudent.php",
        method: "GET",
        success: function (data) {
          studentsList = JSON.parse(data);
          console.log(studentsList);
          for (var i = 0; i < studentsList.length; i++) {
            $(".studentsList").append('<tr><td>'+"Name: "+studentsList[i]["name"]+'</td><td>'+"FatherName: "+studentsList[i]["fathername"]+'</td><td>'+"Rollno: "+studentsList[i]["rollno"]+'</td><td>'+"Degree: "+studentsList[i]["degree"]+'</td><td>'+"Branch: "+studentsList[i]["(branch)"]+'</td></tr>');
          }
        }
      })
    }
    getall();
   
  })
  