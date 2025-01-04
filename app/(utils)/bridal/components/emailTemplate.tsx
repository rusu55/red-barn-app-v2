import React from "react";
import {
  Html,
  Head,
  Body,
  Heading,
  Text,
  Tailwind,
  Container,
  Hr,
} from "@react-email/components";

type Props = {
 name: string;
  phone: string | undefined;
  email: string;
  weddingDate: string;  
  details: string | undefined;
  
};
export const EmailTemplate = ({
 name,
 email,
 weddingDate,  
 details,
 phone,
  
}: any) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className=" bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px] md: max-w-[800px] shadow-md">
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[10px] mx-0">
              Bridal Show Inquiry
            </Heading>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[16px] leading-[24px]">
              <strong>Bride & Groom Name: </strong> {name}
            </Text>
            <Text className="text-[#666666] text-[16px] leading-[24px]">
              <strong>Email: </strong> {email}
            </Text>
            <Text className="text-[#666666] text-[16px] leading-[24px]">
              <strong>Phone: </strong> {phone}
            </Text>
            <Text className="text-[#666666] text-[16px] leading-[24px]">
              <strong>Wedding Date: </strong> {weddingDate}
            </Text>            
            
            <Text className="text-[#666666] text-[16px] leading-[24px]">
              <strong>
                Interested in:{" "}
              </strong>{" "}
              {details}
            </Text>            
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
