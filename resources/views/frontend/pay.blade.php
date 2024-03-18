<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
aaaa
  <button autoclick id="saveButton">btn</button>

      <!-- TODO: gunakan yang ini untuk mode productions" -->
    {{-- <script src="https://app.midtrans.com/snap/snap.js" data-client-key="{{ env('MIDTRANS_CLIENT_KEY') }}"></script> --}}
    
    <!-- TODO: Remove ".sandbox" from script src URL for production environment. Also input your client key in "data-client-key" -->
    <script src="https://app.sandbox.midtrans.com/snap/snap.js" data-client-key="{{ env('MIDTRANS_CLIENT_KEY') }}"></script>
  
<script type="text/javascript">
  document.getElementById('saveButton').onclick = function() {
      // SnapToken acquired from previous step
      snap.pay('{{ $snap }}', {
          // Optional
          onSuccess: function(result) {
              window.location.href =
                  "/event/checkout/success/pay/{{ $tiket->qr_code }}/{{ $tiket->snap_token }}";
              // /* You may add your own js here, this is just example */ document.getElementById('result-json').innerHTML += JSON.stringify(result, null, 2);
          },
          // Optional
          onPending: function(result) {
              /* You may add your own js here, this is just example */
              document.getElementById('result-json').innerHTML += JSON.stringify(result, null, 2);
          },
          // Optional
          onError: function(result) {
              /* You may add your own js here, this is just example */
              document.getElementById('result-json').innerHTML += JSON.stringify(result, null, 2);
          }
      });
  };
</script>
</body>
</html>