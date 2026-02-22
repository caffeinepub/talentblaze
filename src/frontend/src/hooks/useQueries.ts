import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { ContactRequest } from '../backend';

export function useSubmitContactRequest() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      companyName: string;
      inquiry: string;
    }) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.submitContactRequest(data.name, data.email, data.companyName, data.inquiry);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contactRequests'] });
    },
  });
}

export function useGetAllContactRequests() {
  const { actor, isFetching } = useActor();

  return useQuery<ContactRequest[]>({
    queryKey: ['contactRequests'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllContactRequests();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetContactRequest(id: bigint) {
  const { actor, isFetching } = useActor();

  return useQuery<ContactRequest | null>({
    queryKey: ['contactRequest', id.toString()],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getContactRequest(id);
    },
    enabled: !!actor && !isFetching,
  });
}
