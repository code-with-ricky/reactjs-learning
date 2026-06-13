import React from "react";
import Card from "./components/Card";

const App = () => {
  let jobs = [
    {
      company: "Amazon",
      createdAt: "5 days ago",
      logo: "https://images.unsplash.com/photo-1704204656144-3dd12c110dd8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QW1hem9uJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D",
      title: "Senior UI/UX Designer",
      tags: ["Part-Time", "Remote"],
      salary: "$200-250k",
      city: "Bangalore",
      country: "India",
    },
    {
      company: "Spotify",
      createdAt: "2 days ago",
      logo: "https://images.unsplash.com/photo-1511376777868-611b54f68947?w=400&auto=format&fit=crop&q=60",
      title: "Product Designer",
      tags: ["Full-Time", "Hybrid"],
      salary: "$120-150k",
      city: "Berlin",
      country: "Germany",
    },
    {
      company: "Slack",
      createdAt: "1 day ago",
      logo: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&auto=format&fit=crop&q=60",
      title: "Frontend Engineer",
      tags: ["Remote", "Senior"],
      salary: "$140-170k",
      city: "San Francisco",
      country: "USA",
    },
    {
      company: "Tesla",
      createdAt: "4 days ago",
      logo: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&auto=format&fit=crop&q=60",
      title: "UX Researcher",
      tags: ["Contract", "Onsite"],
      salary: "$90-110k",
      city: "Austin",
      country: "USA",
    },
    {
      company: "Airbnb",
      createdAt: "3 days ago",
      logo: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&auto=format&fit=crop&q=60",
      title: "Design Systems Lead",
      tags: ["Full-Time", "Remote"],
      salary: "$180-210k",
      city: "Dublin",
      country: "Ireland",
    },
    {
      company: "Shopify",
      createdAt: "6 days ago",
      logo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&auto=format&fit=crop&q=60",
      title: "Visual Designer",
      tags: ["Part-Time", "Remote"],
      salary: "$95-115k",
      city: "Toronto",
      country: "Canada",
    },
  ];
  return (
    <div className="card-container">
      {jobs?.map((job, index) => {
        return (
          <Card
            key={index}
            company={job.company}
            createdAt={job.createdAt}
            logo={job.logo}
            title={job.title}
            tags={job.tags}
            salary={job.salary}
            city={job.city}
            country={job.country}
          />
        );
      })}
    </div>
  );
};

export default App;
