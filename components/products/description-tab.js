"use client";
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { ArrowUpDown } from "lucide-react";

const DescriptionTab = ({ description }) => {
  return (
    <>
      {/* <Tabs defaultValue="Specification" className=" mt-10">
        <TabsList className="grid grid-cols-2 bg-white ">
          <p className="text-sm md:text-lg underline text-primary underline-offset-4">
            Specification
          </p>
        </TabsList>
        <TabsContent value="Specification">
          <Card className="shadow-none border-r-2 border-t-1 border-l-2 border-b-1 border-gradient">
            <CardContent className="space-y-2 ">
              <ul className="list-disc list-inside text-sm md:text-[16px] text-gray-900 space-y-2">
                <li>Backlight Technology: LED</li>
                <li>Panel Technology: VA</li>
                <li>Display type: LED-backlit LCD monitor</li>
                <li>
                  Display Size: 32-inches FHD (1920 x 1080) 144 Hz Display Size:
                  32-inches FHD (1920 x 1080) 144 Hz Display Size: 32-inches FHD
                  (1920 x 1080) 144 Hz{" "}
                </li>
                <li>Aspect Ratio: 16:9 Widescreen</li>
                <li>Brightness: 250 cd/m²</li>
                <li>Interface: DisplayPort, HDMI</li>
                <li>Dimensions: 20.8 x 71.1 x 52.6 Centimeters</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="Overview">
          <Card className="shadow-none border-r-0 border-t-0 border-l-2 border-b-0 border-primary">
            <CardContent className="space-y-2">New Arrivals</CardContent>
          </Card>
        </TabsContent>
      </Tabs> */}
      <Accordion
        className="mt-10"
        defaultValue="description"
        type="single"
        collapsible
      >
        <AccordionItem value="description" className="border-none">
          {/* Trigger Section */}
          <div>
            <AccordionTrigger className="w-full hover:no-underline pb-0 flex justify-between items-center">
              <p className="text-primary font-bold text-lg sm:text-lg md:text-xl tracking-wide py-1 text-center">
                Description
              </p>
              <ArrowUpDown className="text-primary" />
            </AccordionTrigger>
            <div className="h-[2px] w-full bg-gradient-to-r bg-primary rounded mb-6"></div>
          </div>

          {/* Content Section */}
          <AccordionContent className="text-base transition-all duration-300 ease-in-out">
            <div
              className="product-description prose max-w-none overflow-hidden"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default DescriptionTab;
