// import { twMerge } from "tailwind-merge";
// import Marquee from "../components/Marquee";
// import { reviews } from "../constants";
// const firstRow = reviews.slice(0, reviews.length / 2);
// const secondRow = reviews.slice(reviews.length / 2);

// const ReviewCard = ({ img, name, username, body }) => {
//   return (
//     <figure
//       className={twMerge(
//         "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation"
//       )}
//     >
//       <div className="flex flex-row items-center gap-2">
//         <img
//           className="rounded-full bg-white/10"
//           width="32"
//           height="32"
//           alt=""
//           src={img}
//         />
//         <div className="flex flex-col">
//           <figcaption className="text-sm font-medium text-white">
//             {name}
//           </figcaption>
//           <p className="text-xs font-medium text-white/40">{username}</p>
//         </div>
//       </div>
//       <blockquote className="mt-2 text-sm">{body}</blockquote>
//     </figure>
//   );
// };

// export default function Testimonial() {
//   return (
//     <div className="items-start mt-25 md:mt-35 c-space">
//       <h2 className="text-heading">Hear From My Clients</h2>
//       <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden">
//         <Marquee pauseOnHover className="[--duration:20s]">
//           {firstRow.map((review) => (
//             <ReviewCard key={review.username} {...review} />
//           ))}
//         </Marquee>
//         <Marquee reverse pauseOnHover className="[--duration:20s]">
//           {secondRow.map((review) => (
//             <ReviewCard key={review.username} {...review} />
//           ))}
//         </Marquee>
//         <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
//         <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
//       </div>
//     </div>
//   );
// }
import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { certifications } from "../constants";

const CertificateCard = ({ img, caption }) => {
  return (
        <div
      className={twMerge(
        // The classes below have been updated to match your request
        "relative h-80 w-96 cursor-pointer overflow-hidden rounded-2xl border border-gray-100/[.1] bg-gradient-to-br from-fuchsia-950 to-indigo-900 hover:scale-105 transition-transform p-6"
      )}
    >
      <img
        src={img}
        alt="Certificate"
        className="w-full h-3/4 object-cover rounded-md border border-white/20"
      />
      <div className="mt-3 text-sm text-white text-center">
        {caption}
      </div>
    </div>
  );
};

export default function Certifications() {
  return (
    <div className="c-space section-spacing">
      <h2 className="text-heading">Certifications</h2>
      <div className="relative flex items-center justify-center w-full mt-12 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:30s]">
          {certifications.map((cert, index) => (
            <CertificateCard key={index} {...cert} />
          ))}
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-1/12 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/12 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>
    </div>
  );
}

