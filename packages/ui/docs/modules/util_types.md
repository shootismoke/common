[@shootismoke/ui](../README.md) / [Exports](../modules.md) / util/types

# Module: util/types

## Table of contents

### Interfaces

- [BackendError](../interfaces/util_types.backenderror.md)
- [IEmailReport](../interfaces/util_types.iemailreport.md)
- [IExpoReport](../interfaces/util_types.iexporeport.md)
- [IUser](../interfaces/util_types.iuser.md)
- [MongoPushTicket](../interfaces/util_types.mongopushticket.md)
- [MongoUser](../interfaces/util_types.mongouser.md)

### Type aliases

- [Frequency](util_types.md#frequency)
- [IPushTicket](util_types.md#ipushticket)

## Type aliases

### Frequency

Ƭ **Frequency**: *daily* \| *weekly* \| *monthly*

Defined in: [packages/ui/src/util/types.ts:21](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/types.ts#L21)

___

### IPushTicket

Ƭ **IPushTicket**: *Omit*<ExpoPushTicket & { `receiptId?`: *string* ; `userId`: *string*  }, *id*\>

Defined in: [packages/ui/src/util/types.ts:48](https://github.com/shootismoke/common/blob/1e71707/packages/ui/src/util/types.ts#L48)
