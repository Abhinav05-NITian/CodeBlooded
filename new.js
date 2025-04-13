const donors = [
        { name: "Arjun Mehta", city: "Mumbai", bloodGroup: "A+", img: "https://media.istockphoto.com/id/1185393658/photo/vogue-fashion-style-handsome-young-indian-guy-wearing-a-stylish-shirt-and-sunglasses-posing.jpg?s=612x612&w=0&k=20&c=ZpaF5-rgMpUQjUYDut-ZOvKnqcZV-Z9GsH9I0iwRvXg=" },
        { name: "Priya Sharma", city: "Delhi", bloodGroup: "B+", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRynXIfRpdtdlvWUVftGzdkZHcItFqiSup2gw&s" },
        { name: "Ravi Kumar", city: "Bangalore", bloodGroup: "O+", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPK5jwCP81M7lL1O4drFLfoQOZgHM-ZwfQzQ&s" },
        { name: "Sana Khan", city: "Hyderabad", bloodGroup: "A+", img: "https://img.freepik.com/free-photo/female-model-casting-fall-winter-cosmetics-commercial-red-wall-front-view_114579-18645.jpg?semt=ais_hybrid&w=740" },
        { name: "Neha Verma", city: "Pune", bloodGroup: "AB+", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2KgK2dVtWpQ3f4EkOlWWUmUxU9sbVzszyOg&s" },
        { name: "Karan Patel", city: "Ahmedabad", bloodGroup: "B-", img: "https://i.pinimg.com/736x/a3/6b/83/a36b83b59a4816e848d5bf5ebfe5a3ae.jpg" },
        { name: "Simran Kaur", city: "Chandigarh", bloodGroup: "O+", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE6DfPyzFGVgN-1cshQVdO_ENbTIQIIb57KA&s" },
        { name: "Rahul Desai", city: "Surat", bloodGroup: "A-", img: "https://media.istockphoto.com/id/1149040483/photo/young-indian-collage-student.jpg?s=612x612&w=0&k=20&c=A1MkWRItszGnilLmWGNxFbOysvI6nyhx9lhIrYK7IBU=" },
        { name: "Anjali Nair", city: "Kochi", bloodGroup: "O-", img: "https://st3.depositphotos.com/4761309/37559/i/450/depositphotos_375595910-stock-photo-portrait-beautiful-young-smiling-girl.jpg" },
        { name: "Manav Joshi", city: "Jaipur", bloodGroup: "B+", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCFtznInmaluWWScEJ2goXtqxiq9EuPandYg&s" },
        { name: "Divya Rao", city: "Chennai", bloodGroup: "AB-", img: "https://www.shutterstock.com/image-photo/beautiful-indian-girl-green-dress-260nw-2318298033.jpg" },
        { name: "Yash Singh", city: "Lucknow", bloodGroup: "A+", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1mDJ8IeRGM0ZZTKGFWdlQNjt2Wh1RZhA2Yw&s" },
        { name: "Ishita Roy", city: "Kolkata", bloodGroup: "O-", img: "https://www.shutterstock.com/image-photo/indian-beautiful-girl-folding-arms-260nw-2540913623.jpg" },
        { name: "Vikram Chauhan", city: "Indore", bloodGroup: "B-", img: "https://www.shutterstock.com/image-photo/young-teenager-boy-sunglasses-front-260nw-1240785118.jpg" },
        { name: "Ritika Malhotra", city: "Amritsar", bloodGroup: "AB+", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-dC7QNM6HtsfLJuQqRVkQgSGbxqDxnJ-DtQ&s" },
        { name: "Aman Kapoor", city: "Noida", bloodGroup: "A-", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5peSDUg2ZxzL6vTfFUjACDBhO9nm1QMpW1g&s" },
        { name: "Meena Das", city: "Bhubaneswar", bloodGroup: "B+", img: "https://c8.alamy.com/comp/JB5YGR/1-indian-rural-woman-housewife-standing-and-showing-thumbs-up-success-JB5YGR.jpg" },
        { name: "Deepak Rathi", city: "Nagpur", bloodGroup: "O+", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdqfVb84ShhPYpYapZRrXtHqunuHGJG5J6XA&s" },
        { name: "Rhea Sen", city: "Patna", bloodGroup: "A+", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp9xAcbi9VucqdL7Zi2e1P3egzf8fL8WKqDNOB4TP0M4K3HOkWwEWwLDWUZVDJee1mrWs&usqp=CAU" },
        { name: "Siddharth Jain", city: "Bhopal", bloodGroup: "AB-", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGAx_5CqzsGx_zQvbDFv8YovJX54Qj12fx9Q&s" },
        { name: "Ananata Eeti", city: "Patna", bloodGroup: "O+", img: "https://i.pinimg.com/236x/26/d5/a0/26d5a08343177cdfdec2f7d734692528.jpg" },
        { name: "Tarun Yadav", city: "Agra", bloodGroup: "B-", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT44xDuQdhh52ItJPd5K622gIiTBvo0liyaPdguFN332rofU_Dp4njxL9wPcm8wfkbY2yY&usqp=CAU" },
        { name: "Aarti Chauhan", city: "Varanasi", bloodGroup: "A-", img: "https://www.shutterstock.com/image-photo/young-traditional-indian-woman-arms-260nw-1705308859.jpg" },
        { name: "Rohan Batra", city: "Gwalior", bloodGroup: "B+", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2XZmU6KzR1kZHIBOamgeEUWUbTL79Axskkg&s" },
        { name: "Ira Bhatt", city: "Shimla", bloodGroup: "O-", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5lW4xbf6QdyGyGfguFgiiv1C2WkKhHhtw4Kn7x8DvtcCwuYpE2-OoSFsEOhH83LlSDQU&usqp=CAU" },
        { name: "Dev Sharma", city: "Raipur", bloodGroup: "AB+", img: "https://www.shutterstock.com/image-photo/dhaka-bangladesh-february-24-2017-260nw-1081888337.jpg" },
        { name: "Nidhi Agrawal", city: "Araria", bloodGroup: "O+", img: "https://i.pinimg.com/originals/7f/b0/b7/7fb0b7499e57d52f834dcc050ed785fd.jpg" },
        { name: "Ritesh Malani", city: "Ranchi", bloodGroup: "A+", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPK5jwCP81M7lL1O4drFLfoQOZgHM-ZwfQzQ&s" },
        { name: "Shweta Menon", city: "Trivandrum", bloodGroup: "AB-", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFnhMYSP86lVgvr3BqOUsiyeL2U_QqmjV6xQ&s" },
        { name: "Nikhil Bansal", city: "Coimbatore", bloodGroup: "B+", img: "https://randomuser.me/api/portraits/men/58.jpg" }
      ];
     
  const searchBar = document.getElementById('searchBar');
  const results = document.getElementById('results');

  
  searchBar.addEventListener('input', function () {
    const query = searchBar.value.toUpperCase().trim();
    const filtered = donors.filter(donor => donor.bloodGroup.toUpperCase() === query);
  
    results.innerHTML = '';
  
    if (filtered.length === 0 && query !== "") {
      results.innerHTML = `<p>No donors found for blood group "${query}".</p>`;
      return;
    }
  
    filtered.forEach(donor => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${donor.img}" alt="${donor.name}">
        <h3>${donor.name}</h3>
        <p>City: ${donor.city}</p>
        <p>Blood Group: ${donor.bloodGroup}</p>
        <button class="b1" >Connect</button>
      `;
      results.appendChild(card);
    });
  });
  let b1 = document.querySelectorAll(".b1") ;
b1 = Array.from(b1) ;
b1.forEach(element =>
{
    element.addEventListener("click" , () =>
        {
           let k = b1.indexOf(element) ;
            b1[k].style.backgroundColor = "white" ;
            b1[k].style.color = "red" ;
            alert ("Request Sent") ;
        })
}) 
let innerHTML = " ";
  for(let i = 0 ; i < donor.length ; i++)
  {
  innerHTML += `    <div>
        <img src = ${donor[i].img}>
        <h2> ${donor[i].name}  </h2>
        <p> <img src = "https://yt3.googleusercontent.com/g4a0IbVJmpT8nG3Mwqw4qqgqFLq69zFek4UtEIcmKqFkTkxRveLu-sKXWhVVq2zZI5hQXtWFLw8=s900-c-k-c0x00ffffff-no-rj"> <b> Blood Group : ${donor[0].blood} </b> Age : ${donor[0].age}</p>
        <button class = "b1"> Connect </button>
    </div>`
  }
    let donor = document.querySelector(".donor") ;
    donor.innerHTML = innerHTML ;

    function displayResults(filteredData) {
        const resultsContainer = document.getElementById("results");
        resultsContainer.innerHTML = "";
      
        if (filteredData.length === 0) {
          resultsContainer.innerHTML = "<p style='text-align:center;'>No matching donors found.</p>";
          return;
        }
      
        filteredData.forEach(person => {
          const card = document.createElement("div");
          card.className = "card";
      
          card.innerHTML = `
            <img src="${person.img}" alt="${person.name}">
            <h3>${person.name}</h3>
            <p>${person.city}</p>
            <div class="blood-group">${person.bloodGroup}</div>
          `;
      
          resultsContainer.appendChild(card);
        });
      }
      