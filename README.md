# Machinist Javascript sdk


MachinistのjavascriptSDK（非公式）です。


## install


### node.js
npm未対応

dist/machinist.jsを任意のフォルダに置いてrequireしてください

## html
```
<script src="https://rawcdn.githack.com/9wick/machinist.js/e8f3c404cefdc3400211ce4874ece645dfc7278b/dist/machinist.min.js" />
```

## How to use

```
//create instance
const machinist = new Machinist('AgentName', 'ApiKey');


// add data
machinist.addMetric('temperature', Math.random * 10, {
    namespace: 'Environment Sensor',
  });
  
//send data
machinist
  .post()
  .then(res => res.json())
  .then(json => {
    console.log(json);
  });

```