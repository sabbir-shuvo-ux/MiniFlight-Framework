"use client";

const GoogleMap = () => {
  return (
    <section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d225470.7729032409!2d-82.45428!3d27.994483!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2b782b3b9d1e1%3A0xa75f1389af96b463!2sTampa%2C%20FL!5e0!3m2!1sen!2sus!4v1700073440213!5m2!1sen!2sus"
        width={1536}
        height={400}
        style={{ border: 0, width: "100%" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
};

export default GoogleMap;
