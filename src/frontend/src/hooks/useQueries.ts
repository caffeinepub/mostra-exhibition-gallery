import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { GalleryItem, Lead } from "../backend";
import { useActor } from "./useActor";

export function useGalleryItems() {
  const { actor, isFetching } = useActor();
  return useQuery<GalleryItem[]>({
    queryKey: ["galleryItems"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getGalleryItems();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useLeads() {
  const { actor, isFetching } = useActor();
  return useQuery<Lead[]>({
    queryKey: ["leads"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getLeads();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useIsAdmin() {
  const { actor, isFetching } = useActor();
  return useQuery<boolean>({
    queryKey: ["isAdmin"],
    queryFn: async () => {
      if (!actor) return false;
      return actor.isCallerAdmin();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useInteraktWebhookUrl() {
  const { actor, isFetching } = useActor();
  return useQuery<string>({
    queryKey: ["interaktWebhookUrl"],
    queryFn: async () => {
      if (!actor) return "";
      return actor.getInteraktWebhookUrl();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitLead() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      phone: string;
      message: string;
      source: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      const id = await actor.submitLead(
        data.name,
        data.email,
        data.phone,
        data.message,
        data.source,
      );
      // Fire and forget Interakt notification
      actor
        .triggerInteraktNotification(data.name, data.phone, data.email)
        .catch(() => {});
      return id;
    },
  });
}

export function useUpdateLeadStatus() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, status }: { id: bigint; status: string }) => {
      if (!actor) throw new Error("Not connected");
      await actor.updateLeadStatus(id, status);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["leads"] });
    },
  });
}

export function useDeleteLead() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("Not connected");
      await actor.deleteLead(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["leads"] });
    },
  });
}

export function useAddGalleryItem() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      title: string;
      artist: string;
      description: string;
      image: import("../backend").ExternalBlob;
      category: string;
      sortOrder: bigint;
    }) => {
      if (!actor) throw new Error("Not connected");
      await actor.addGalleryItem(
        data.title,
        data.artist,
        data.description,
        data.image,
        data.category,
        data.sortOrder,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["galleryItems"] });
    },
  });
}

export function useUpdateGalleryItem() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      id: bigint;
      title: string;
      artist: string;
      description: string;
      image: import("../backend").ExternalBlob;
      category: string;
      sortOrder: bigint;
    }) => {
      if (!actor) throw new Error("Not connected");
      await actor.updateGalleryItem(
        data.id,
        data.title,
        data.artist,
        data.description,
        data.image,
        data.category,
        data.sortOrder,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["galleryItems"] });
    },
  });
}

export function useRemoveGalleryItem() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("Not connected");
      await actor.removeGalleryItem(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["galleryItems"] });
    },
  });
}

export function useSetInteraktWebhookUrl() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (url: string) => {
      if (!actor) throw new Error("Not connected");
      await actor.setInteraktWebhookUrl(url);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["interaktWebhookUrl"] });
    },
  });
}
