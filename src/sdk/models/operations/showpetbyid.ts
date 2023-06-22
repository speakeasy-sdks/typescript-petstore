/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ShowPetByIdRequest extends SpeakeasyBase {
    /**
     * The id of the pet to retrieve
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=petId" })
    petId: string;
}

export class ShowPetByIdResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * unexpected error
     */
    @SpeakeasyMetadata()
    error?: shared.ErrorT;

    /**
     * Expected response to a valid request
     */
    @SpeakeasyMetadata({ elemType: shared.Pet })
    pets?: shared.Pet[];

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
