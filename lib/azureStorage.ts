import { BlobServiceClient } from "@azure/storage-blob";
import { DefaultAzureCredential } from "@azure/identity";

const storageAccountName = process.env.AZURE_STORAGE_ACCOUNT_NAME;
const containerName: any = process.env.AUZRE_STORAGE_CONTAINER_NAME;

const blobServiceClient = new BlobServiceClient(
  `https://${storageAccountName}.blob.core.windows.net`,
  new DefaultAzureCredential()
);

const containerClient = blobServiceClient.getContainerClient(containerName);

export const listBlobs = async () => {
  const blobs = [];
  for await (const blob of containerClient.listBlobsFlat()) {
    blobs.push(blob);
  }
  return blobs;
};

export const getBlobUrl = (blobName: any) => {
  return `https://${storageAccountName}.blob.core.windows.net/${containerName}/${blobName}`;
};