<!-- Start SDK Example Usage -->
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
<!-- End SDK Example Usage -->