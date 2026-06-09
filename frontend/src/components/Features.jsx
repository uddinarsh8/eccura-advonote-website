import {
  FileText,
  Users,
  BarChart
}
from "lucide-react";

function Features() {

 return (

  <section className="py-20">

   <div className="max-w-7xl mx-auto px-6">

    <h2
      className="text-4xl font-bold text-center mb-12"
    >
      Features
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="shadow-lg p-6 rounded-xl">
        <FileText size={50} />
        <h3>Case Management</h3>
      </div>

      <div className="shadow-lg p-6 rounded-xl">
        <Users size={50} />
        <h3>Client Management</h3>
      </div>

      <div className="shadow-lg p-6 rounded-xl">
        <BarChart size={50} />
        <h3>Analytics Dashboard</h3>
      </div>

    </div>

   </div>

  </section>

 );

}

export default Features;