import React from "react";
import { useRouter } from "next/router";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Divider,
  Icon,
} from "@chakra-ui/react";
import axios from "axios";
import { hasCookie } from "cookies-next";
import { GetServerSideProps } from "next";

export default function SignIn() {

  const router = useRouter();

  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();

        const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };

    const credentials = {
      email: target.email.value,
      password: target.password.value,
    };

    const { data } = await axios.post("/api/auth/signIn", credentials);

    if (data) {
      router.push("/profile");
    }
  };

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Sign in to your account</Heading>
          <form onSubmit={handleLogin}>
            <FormControl id="email" mt={4}>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
              />
            </FormControl>
            <FormControl id="password" mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                type="password"
                
              />
            </FormControl>
            <Button
              colorScheme={"blue"}
              variant={"solid"}
              type="submit"
              mt={4}
              w={"full"}
            >
              Sign in
            </Button>
          </form>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
              <Link color={"blue.500"}>Forgot password?</Link>
            </Stack>
          </Stack>
          <Divider py={3} />
        </Stack>
      </Flex>
    </Stack>
  );
}

