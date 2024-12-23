import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const teamData = [
 
  {
    id:2,
    name: "John Doe",
    role: "Frontend Developer",
    img: "https://img.freepik.com/free-photo/confident-young-entrepreneur-sitting-table-with-laptop-pc-isolated-white_231208-11121.jpg?t=st=1734903630~exp=1734907230~hmac=ca9ad5002fc0923f3082b359869a567e99eedcb944b32aabf824ea0c1d3c1538&w=996",
  },
  {
    id:1,
    name: "Jane Smith",
    role: "Backend Developer",
    img: "https://img.freepik.com/free-photo/pupils-doing-task-laptops-focused-teacher-monitoring-them_74855-10356.jpg?t=st=1734903728~exp=1734907328~hmac=704539993bd67d1f67b2cc40fdd7cbdb484cfaa052d369370480c4400f81bd4f&w=996",
  },
  {
    id:3,
    name: "Sam Wilson",
    role: "UI/UX Designer",
    img: "https://img.freepik.com/free-photo/thoughtful-african-american-businessman-using-laptop-pondering-project-business-strategy-puzzled-employee-executive-looking-laptop-screen-reading-email-making-decision-office_231208-676.jpg?t=st=1734903656~exp=1734907256~hmac=dfb191c01200c342920f3c933e15e23c7c34a40de0d99c1d72a8b629e7bf57fc&w=996",
  },
 
];

const TeamSection = () => {
  return (
    <>
    <div className="container-fluid my-5 Courses mt-5 ">
        <h1>
          Team
        </h1>
       </div>
       <div className="container   mt-4 ">
       
       <div className="row">
         {teamData.map((member) => (
           <div key={member.id} className="col-md-4 mb-4">
             <div className="card c_team w-70 h-50 m-3 text-center shadow">
               <img
                 src={member.img}
                 alt={member.name}
                 className="card-img-top"
               />
               <div className="card-body">
                 <h5 className="card-title">{member.name}</h5>
                 <p className="card-text">{member.role}</p>
               </div>
             </div>
           </div>
         ))}
       </div>
     </div>
     
     </>
  );
};

export default TeamSection;
