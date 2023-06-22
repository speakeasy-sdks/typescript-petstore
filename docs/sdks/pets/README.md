# pets

### Available Operations

* [createPets](#createpets) - Create a pet
* [listPets](#listpets) - List all pets
* [showPetById](#showpetbyid) - Info for a specific pet

## createPets

Create a pet

### Example Usage

```typescript
import { PetstoreTest } from "petstore-test";
import { CreatePetsResponse } from "petstore-test/dist/sdk/models/operations";

const sdk = new PetstoreTest();

sdk.pets.createPets().then((res: CreatePetsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreatePetsResponse](../../models/operations/createpetsresponse.md)>**


## listPets

List all pets

### Example Usage

```typescript
import { PetstoreTest } from "petstore-test";
import { ListPetsResponse } from "petstore-test/dist/sdk/models/operations";

const sdk = new PetstoreTest();

sdk.pets.listPets({
  limit: 548814,
}).then((res: ListPetsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [operations.ListPetsRequest](../../models/operations/listpetsrequest.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.ListPetsResponse](../../models/operations/listpetsresponse.md)>**


## showPetById

Info for a specific pet

### Example Usage

```typescript
import { PetstoreTest } from "petstore-test";
import { ShowPetByIdResponse } from "petstore-test/dist/sdk/models/operations";

const sdk = new PetstoreTest();

sdk.pets.showPetById({
  petId: "provident",
}).then((res: ShowPetByIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.ShowPetByIdRequest](../../models/operations/showpetbyidrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.ShowPetByIdResponse](../../models/operations/showpetbyidresponse.md)>**

