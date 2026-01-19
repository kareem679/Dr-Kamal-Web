"use server";

const ContactCom = async () => {
  return (
    <section className="container mx-auto px-4 max-w-6xl mt-20">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-gray-900">تواصل معنا</h2>
        <p className="text-gray-600 mt-3">
          يسعدنا تواصلك معنا لحجز موعد أو الاستفسار عن أي خدمة
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-20">
        <div className="space-y-6">
          <a
            href="https://wa.me/201033156066"
            target="_blank"
            className="w-full items-center inline-flex justify-center bg-green-500 md:w-auto px-8 py-4 text-white rounded-xl font-semibold hover:bg-green-600 transition"
          >
            <i className="fa-brands fa-whatsapp text-3xl"></i> احجز الان على
            الواتس
          </a>

          <div className="space-y-3 text-gray-700">
            <p>📍 العنوان: كفر الشيخ - شارع مالك بن دينار</p>
            <p>⏰ مواعيد العمل: من السبت إلى الخميس – 10ص : 9م</p>
            <p>
             Phone:  <span>+20103 315 6066</span>
            </p>
          </div>
        </div>

        <div className="w-full h-[350px] overflow-hidden rounded-2xl shadow-2xl">
          <iframe
            className="w-full h-full transition duration-500 ease-out hover:scale-105 hover:brightness-90 brightness-75"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3412.4747820375546!2d31.05438727559918!3d31.2075730743587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDEyJzI3LjMiTiAzMcKwMDMnMjUuMSJF!5e0!3m2!1sen!2seg!4v1768488022605!5m2!1sen!2seg"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactCom;
