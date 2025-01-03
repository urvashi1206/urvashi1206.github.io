import React from "react";

const Achievements = () => {
  const achievementsData = [
    {
      title: "Paper Published on Patient Monitoring and Assisting",
      description:
        "A Real-life Unity3D Application in IEEE International Conference on Computing, Communication, and Intelligent Systems.",
    },
    {
      title: "Secured 3rd place for academic excellence",
      description: "",
    },
    {
      title: "Secured 1st place in Fr. Conceicao Rodrigues Memorial Hackathon UNSCRIPT 2k20",
      description: "",
    },
  ];

  const responsibilitiesData = [
    {
      title: "Marketing Head",
      description: "ABU ROBOCON Team, Fr. CRCE.",
    },
    {
      title: "Webmaster",
      description: "IEEE-WIE Council, Fr. CRCE.",
    },
  ];

  const renderCard = (item, index) => (
    <div
      key={index}
      className="p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 bg-[#343a40]"
      style={{
        backgroundColor: "rgba(52, 64, 60, 0.3)",
      }}
    >
      <h4 className="text-white text-lg font-semibold mb-2">{item.title}</h4>
      {item.description && (
        <p className="text-gray-200 mb-4">{item.description}</p>
      )}
    </div>
  );

  return (
    <section id="achievements" class="about background-alt">
            <div class="container" data-aos="fade-up">
                <div class="section-title">
                <h2>Achievements & Responsibilities</h2>
            </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Achievements Section */}
          <div>
            <div className="grid grid-cols-1 gap-6">
              {achievementsData.map((item, index) =>
                renderCard(item, index)
              )}
            </div>
          </div>

          {/* Responsibilities Section */}
          <div>
            <div className="grid grid-cols-1 gap-6">
              {responsibilitiesData.map((item, index) =>
                renderCard(item, index)
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
