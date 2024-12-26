// reviewData.js
const reviews = [
  {
    name: "pieperpost",
    country: { code: "NL", name: "Netherlands" },
    timeAgo: "4 months ago",
    review: "Second time to work with Neel. I can recommend him to anyone!",
    stars: 5,
    image:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/adc31ab466013f70d679bc0cc8d0ce87-1363789091705869785813/JPEG_20240121_214305_694786491309636732.jpg",
  },
  {
    name: "maicolbruno",
    country: { code: "CA", name: "Canada" },
    timeAgo: "9 months ago",
    review:
      "Neel was great to work with. Provided possible workflows and solutions to the problem. He also wanted to ensure that I was satisfied and happy with the support provided. It was a useful and practical meeting. Very professional.",
    stars: 5,
    image: null,
  },
  {
    name: "chrissarraf",
    country: { code: "US", name: "United States" },
    timeAgo: "9 months ago",
    review:
      "Excellent communication and fully capable of everything I asked. Wonderful work!",
    stars: 5,
    image: null,
  },
  {
    name: "nassau",
    country: { code: "US", name: "United States" },
    timeAgo: "10 months ago",
    review: "Thanks you for your support",
    stars: 5,
    image:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/1908090/original/avatar.jpg",
  },
  {
    name: "pieperpost",
    country: { code: "NL", name: "Netherlands" },
    timeAgo: "10 months ago",
    review:
      "This was a complicated project with lots of customizations. In the end it took a month instead of 8 days, but Neel and his team corrected every single problem until everything worked perfectly. Very satisfied with the result.",
    stars: 5,
    image:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/adc31ab466013f70d679bc0cc8d0ce87-1363789091705869785813/JPEG_20240121_214305_694786491309636732.jpg",
  },
  {
    name: "darrenfenton",
    country: { code: "GB", name: "United Kingdom" },
    timeAgo: "10 months ago",
    review: "great job done",
    stars: 5,
    image:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/161541f34a9d55b4c3f4385b6dba5946-1681592818137/82e2d94a-f5cd-4724-b7b1-3444ad798bdc.jpg",
  },
  {
    name: "michaellmarx",
    country: { code: "US", name: "United States" },
    timeAgo: "1 year ago",
    review:
      "Neel is a personable, and helpful technical consultant. I would use him in the future.",
    stars: 5,
    image: null,
  },
  {
    name: "protein_com",
    country: { code: "SE", name: "Sweden" },
    timeAgo: "1 year ago",
    review: "Just perfect. I'm confident I will work more with him.",
    stars: 5,
    image:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/be24024c3faa8743fbc221538901eaba-1666706150857/e7ec9776-397b-465b-89c7-63ea899bf1d6.jpeg",
  },
  {
    name: "garethstageman",
    country: { code: "US", name: "United States" },
    timeAgo: "1 year ago",
    review:
      "Excellent work. The seller was very responsive and delivered exactly what I needed. During the project, changes I requested were implemented quickly and accurately. Communication was excellent and very friendly. I have commissioned more work already and hope to work with this seller way into the future. Highly Recommended!",
    stars: 5,
    image: null,
  },
  {
    name: "jakerosen614",
    country: { code: "US", name: "United States" },
    timeAgo: "1 year ago",
    review: "great and easy to work wtih",
    stars: 5,
    image: null,
  },
  {
    name: "rudylion72",
    country: { code: "US", name: "United States" },
    timeAgo: "1 year ago",
    review: "Order delivery",
    stars: 5,
    image: null,
  },
  {
    name: "galih_setyasa",
    country: { code: "ID", name: "Indonesia" },
    timeAgo: "1 year ago",
    review:
      "I had the pleasure of working with Neel to automate a time-consuming task. Neel's expertise in Excel/spreadsheet and their understanding of the assignment were impressive. He completed the work that would have taken me 2 days in just 1-2 hours. Neel was easy to talk to, trustworthy with confidential tasks, and I would definitely hire him again for future assignments. Highly recommended!",
    stars: 5,
    image: null,
  },
  {
    name: "kevinfeucht455",
    country: { code: "ES", name: "Spain" },
    timeAgo: "1 year ago",
    review:
      "Neel is an amazing guy with a great skill set. He created the sheet exactly how I wanted it. Thank you so much!!",
    stars: 5,
    image: null,
  },
  {
    name: "lamacabra",
    country: { code: "ES", name: "Spain" },
    timeAgo: "1 year ago",
    review: "Neel is a great professional! Excellent work!",
    stars: 5,
    image: null,
  },
  {
    name: "investplan1952",
    country: { code: "US", name: "United States" },
    timeAgo: "1 year ago",
    review:
      "I feel incredibly lucky to have had such a professional and capable seller work on my project. He responded promptly, he offered his measured professional advice and it was just an absolute seamless collaboration. I will definitely hire this seller and 1000% recommend this seller to all!!!",
    stars: 5,
    image: null,
  },
  {
    name: "cindyl724",
    country: { code: "CA", name: "Canada" },
    timeAgo: "1 year ago",
    review: "great service and understand my needs",
    stars: 5,
    image: null,
  },
  {
    name: "manifestsource",
    country: { code: "US", name: "United States" },
    timeAgo: "1 year ago",
    review:
      "Another outstanding experience with this seller!! I highly recommend this seller and he has become a consistent resource for the work we need completed. He always finds solutions to complex excel and data visualization issues and we'll continue to use his exceptional services over and over.",
    stars: 5,
    image: null,
  },
  {
    name: "lana_bauer",
    country: { code: "DK", name: "Denmark" },
    timeAgo: "1 year ago",
    review:
      "Neel was very perceptive and attentive, helped me find the best solution, and delivered the product on time and according to my best expectations. Thank you!",
    stars: 5,
    image: null,
  },
  {
    name: "grow_dokotela",
    country: { code: "AU", name: "Australia" },
    timeAgo: "1 year ago",
    review:
      "Neel was great to work with and extremely responsive throughout the duration of the project. He goes above and beyond and pays close attention to detail. Will definitely use again in the future.",
    stars: 5,
    image: null,
  },
];

export default reviews;
