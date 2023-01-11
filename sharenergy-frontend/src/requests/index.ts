import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { api } from "../services/api.service";

export const useRandomUsers = async (count: number) => {
  const response = await axios.get(`https://randomuser.me/api?results=${count}`);

  if (response.status !== 200) {
    throw new Error("Failed to fetch random users");
  }

  const { results } = response.data;

  return results;
};

export const useRandomDog = async () => {
  const response = await axios.get<{ message: string }>("https://dog.ceo/api/breeds/image/random");

  if (response.status !== 200) {
    throw new Error("Failed to fetch random dog");
  }

  const { message } = response.data;

  return message;
};

export const createClient = async (name: string, email: string, phone: string, address: string, cpf: string) => {
  try {
    return await api.post("/client", { name, email, phone, address, cpf });
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};

export const deleteClient = async (id: string) => {
  api
    .delete(`/client/${id}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      if (error instanceof AxiosError) {
        return error.response;
      }
    });
};

export const getClientById = async (id: string) => {
  api
    .get(`/client/${id}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      if (error instanceof AxiosError) {
        return error.response;
      }
    });
};

export const getClients = async (amount: number, skip: number) => {
  try {
    return await api.get(`/clients?amount=${amount}&skip=${skip}`);
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};

export const updateClient = async (
  id: string,
  data: { name: string; email: string; phone: string; address: string; cpf: string },
) => {
  try {
    return await api.put(`/client/${id}`, data);
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response;
    }
  }
};
