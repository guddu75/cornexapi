# cornexapi
This api is based on etherscan api
## Transactions
This endpoint responses with all the the normal ethereum transaction \
query parameter : addressId
```
https://cornexapi.herokuapp.com/api/v1/transaction?addressId=0x62ea94320aa06DdaB6587825d179D1C1B70868B7
```
Response
```json
{	"_id":"632a202893d5ce2d63d559f6",
	"addressId":"0x62ea94320aa06DdaB6587825d179D1C1B70868B7",
	"__v":0,
	"transactions":[
		{"from":"0x077d360f11d220e4d5d831430c81c26c9be7c4a4",
		"to":"0x62ea94320aa06ddab6587825d179d1c1b70868b7",
		"value":"827115850000000000",
		"_id":"632a2028889ae5e2159a7c4d"},
		{"from":"0x62ea94320aa06ddab6587825d179d1c1b70868b7",
		"to":"0x675603dea241368f28a431f6890e811507ba1a20",
		"value":"826538000000000000",
		"_id":"632a2028889ae5e2159a7c4e"},
		{"from":"0x077d360f11d220e4d5d831430c81c26c9be7c4a4",
		"to":"0x62ea94320aa06ddab6587825d179d1c1b70868b7",
		"value":"651744890000000000",
		"_id":"632a2028889ae5e2159a7c4f"}
	]
}
```
Try this [endpoint](https://cornexapi.herokuapp.com/api/v1/transaction?addressId=0x62ea94320aa06DdaB6587825d179D1C1B70868B7){:target="_blank"}.

## Balance
This endpoint responses with current balance in ETH and current INR value of that balance . \
query parameter : addressId

```
https://cornexapi.herokuapp.com/api/v1/balance?addressId=0x62ea94320aa06DdaB6587825d179D1C1B70868B7 
```
Response
```json
{
	"balance":0.65232274,  // current value in ETH
	"INRValue":70477.60115234001 // INR value of balance
}
```
Try this [endpoint](https://cornexapi.herokuapp.com/api/v1/balance?addressId=0x62ea94320aa06DdaB6587825d179D1C1B70868B7){:target="_blank"}.
