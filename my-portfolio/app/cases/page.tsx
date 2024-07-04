import React from "react";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";
import { AwardIcon } from "lucide-react";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths, GetServerSideProps, Metadata } from 'next'



export default function page() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#020202]">
      <div className="max-w-screen-7xl mx-auto">
        <Navbar />
        <div className="container py-8">
          <div className="">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-1 text-sm text-gray-600 py-4">
                <li>
                  <a href="#" className="block transition hover:text-gray-700">
                    <span className="sr-only"> Home </span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </a>
                </li>

                <li className="rtl:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>

                <li>
                  <a href="#" className="block transition hover:text-gray-700">
                    {" "}
                    Shirts{" "}
                  </a>
                </li>

                <li className="rtl:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>

                <li>
                  <a href="#" className="block transition hover:text-gray-700">
                    {" "}
                    Plain Tee{" "}
                  </a>
                </li>
              </ol>
            </nav>
            <span className="text-slate-200 text-justify text-3xl font-black leading-snug  bg-gradient-to-r from-gray-50 from-10% to-gray-400 to-90% text-transparent bg-clip-text">
              Como facilitar o processo de gerenciamento de estoque para
              pequenos e médios restaurantes
            </span>
            <time className="block text-xs text-gray-500"> 10th Oct 2022 </time>
          </div>
          <p className="text-justify text-lg py-8">
            Lorem ipsum dolor sit amet consectetur. Et eu faucibus vitae
            venenatis in. Dignissim curabitur nisl ultrices euismod tincidunt at
            lobortis consectetur. Eleifend porttitor erat tortor non aliquam
            dolor egestas faucibus in. Nulla a ut leo viverra est ut vulputate
            justo. Natoque at est mauris dui egestas. Id egestas lectus ipsum
            placerat metus et. Lacus vitae aliquam luctus pretium ipsum tortor
            lacus. Aliquam augue fermentum ac urna. Vulputate sem magna volutpat
            nulla magna sed curabitur pretium. Faucibus sodales nibh vitae
            tristique ultrices placerat turpis. Massa at odio ut amet platea
            commodo at id. Fermentum etiam elementum commodo phasellus volutpat
            leo. Maecenas blandit sed purus id justo. Lectus neque pharetra
            rhoncus eget enim gravida scelerisque. Amet augue pharetra amet nec.
            Cursus fusce consectetur tortor feugiat ac tincidunt sodales. Ipsum
            volutpat velit posuere id. Turpis aenean proin donec nunc donec. Et
            quis maecenas non ipsum mauris curabitur cursus nulla posuere.
            Tincidunt tincidunt facilisis nec aenean id suspendisse enim. Odio
            aliquet egestas pharetra tellus non bibendum enim. Urna tristique
            montes leo elit bibendum nam praesent ante ac. Quisque dui magna
            vitae vestibulum lobortis amet. Id elit risus ut convallis donec
            massa sed dictumst elementum. Vel iaculis in duis lectus lorem in.
            Sagittis aenean sed consectetur eget mauris ac ultricies massa
            velit. At non vitae dapibus arcu sit sollicitudin. Et consequat
            tincidunt tellus diam dolor orci viverra. Congue tortor vitae purus
            sed nibh tellus hac. Lacus sit leo volutpat massa vel consectetur et
            quis. Sed turpis ut pulvinar tortor dolor. At tristique eleifend non
            ac viverra sodales sed. Risus quis accumsan tortor dui tempor ut
            etiam bibendum. Risus tristique nullam tempor elit adipiscing
            interdum. Etiam tortor dis dui varius viverra a. Id habitasse
            ultricies viverra tellus euismod. Nunc est pellentesque viverra urna
            vel elementum sit. Ultrices condimentum pulvinar justo in. Id
            pellentesque pharetra cras sed eu aliquet morbi ipsum. Vitae
            sagittis elit nunc in faucibus fermentum et. Turpis in diam laoreet
            ultricies vitae pellentesque. Sed quis nibh nam rhoncus adipiscing
            convallis eget viverra. Fringilla pretium praesent tellus sit metus
            nulla diam facilisis. Arcu at volutpat netus porttitor nunc
            fermentum lobortis non purus. Sodales cras volutpat sed orci. Orci
            penatibus hac vitae purus. Nisi mi amet odio sed metus. Posuere et
            aliquam sed fringilla.
          </p>
          <img
            src="/assets/test-cover.webp"
            alt=""
            className="mx-auto rounded-2xl object-cover w-full object-left-top"
          />
          <p className="text-justify text-lg py-8">
            Lorem ipsum dolor sit amet consectetur. Et eu faucibus vitae
            venenatis in. Dignissim curabitur nisl ultrices euismod tincidunt at
            lobortis consectetur. Eleifend porttitor erat tortor non aliquam
            dolor egestas faucibus in. Nulla a ut leo viverra est ut vulputate
            justo. Natoque at est mauris dui egestas. Id egestas lectus ipsum
            placerat metus et. Lacus vitae aliquam luctus pretium ipsum tortor
            lacus. Aliquam augue fermentum ac urna. Vulputate sem magna volutpat
            nulla magna sed curabitur pretium. Faucibus sodales nibh vitae
            tristique ultrices placerat turpis. Massa at odio ut amet platea
            commodo at id. Fermentum etiam elementum commodo phasellus volutpat
            leo. Maecenas blandit sed purus id justo. Lectus neque pharetra
            rhoncus eget enim gravida scelerisque. Amet augue pharetra amet nec.
            Cursus fusce consectetur tortor feugiat ac tincidunt sodales. Ipsum
            volutpat velit posuere id. Turpis aenean proin donec nunc donec. Et
            quis maecenas non ipsum mauris curabitur cursus nulla posuere.
            Tincidunt tincidunt facilisis nec aenean id suspendisse enim. Odio
            aliquet egestas pharetra tellus non bibendum enim. Urna tristique
            montes leo elit bibendum nam praesent ante ac. Quisque dui magna
            vitae vestibulum lobortis amet. Id elit risus ut convallis donec
            massa sed dictumst elementum. Vel iaculis in duis lectus lorem in.
            Sagittis aenean sed consectetur eget mauris ac ultricies massa
            velit. At non vitae dapibus arcu sit sollicitudin. Et consequat
            tincidunt tellus diam dolor orci viverra. Congue tortor vitae purus
            sed nibh tellus hac. Lacus sit leo volutpat massa vel consectetur et
            quis. Sed turpis ut pulvinar tortor dolor. At tristique eleifend non
            ac viverra sodales sed. Risus quis accumsan tortor dui tempor ut
            etiam bibendum. Risus tristique nullam tempor elit adipiscing
            interdum. Etiam tortor dis dui varius viverra a. Id habitasse
            ultricies viverra tellus euismod. Nunc est pellentesque viverra urna
            vel elementum sit. Ultrices condimentum pulvinar justo in. Id
            pellentesque pharetra cras sed eu aliquet morbi ipsum. Vitae
            sagittis elit nunc in faucibus fermentum et. Turpis in diam laoreet
            ultricies vitae pellentesque. Sed quis nibh nam rhoncus adipiscing
            convallis eget viverra. Fringilla pretium praesent tellus sit metus
            nulla diam facilisis. Arcu at volutpat netus porttitor nunc
            fermentum lobortis non purus. Sodales cras volutpat sed orci. Orci
            penatibus hac vitae purus. Nisi mi amet odio sed metus. Posuere et
            aliquam sed fringilla.
          </p>
          <div className="w-full rounded-lg border bg-zinc-950 border-gray-900 backdrop-blur-[14px] flex justify-between mt-40">
            <div className="text-neutral-100 text-base font-semibold flex gap- basis-1/2 hover:bg-gray-800 p-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-chevron-left"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              Projeto anterior
            </div>
            <div className="text-neutral-100 text-base font-semibold flex gap-2 w-full basis-1/2 justify-end hover:bg-gray-800 p-8">
              Próximo projeto
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-chevron-right"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
