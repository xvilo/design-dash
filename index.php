<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Design Dashboard</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/skeleton.css">
    <link rel="stylesheet" href="css/ns.css">
    <META HTTP-EQUIV="refresh" CONTENT="60">
</head>
<body>
    <div class="pane ns" data-pane-time="5000">
        <header class="ns__header"><h1 class="ns__header-title"><span class="js-skeleton-remove skeleton-text skeleton-long"></span></h1></header>
        <section class="ns__body">
            <ul class="js-ns-departures ns__departures">
                <?php
                    for ($x = 0; $x <= 15; $x++) {
                ?>
                    <li class="js-skeleton-remove ns__departure">
                    <span class="ns__departure-info">
                        <span class="ns__departure-destination"><span
                                    class="skeleton-text skeleton-long"></span></span><Br>
                        <span class="ns__departure-destination-route"><span
                                    class="skeleton-text skeleton-short"></span></span>
                    </span>
                        <span class="ns__departure-type">
                        <span class="js-ns-departure-type ns__departure-type"><span
                                    class="skeleton-text skeleton-short"></span></span>
                    </span>
                        <span class="ns__departure-timedata">
                        <span class="ns__departure-time" data-time=""><span
                                    class="skeleton-text skeleton-mid"></span></span>
                    </span>
                    </li>
                <?php
                    }
                ?>
            </ul>
        </section>
        <div class="hidden">
            <div class="js-template-departure">
                <li class="ns__departure" data-delay="{ VertrekVertragingTekst }">
                    <span class="ns__departure-info">
                        <span class="ns__departure-destination">{ EindBestemming }</span><Br>
                        <span class="ns__departure-destination-route">{ RouteTekst }</span>
                    </span>
                    <span class="ns__departure-type">
                        <span class="js-ns-departure-type ns__departure-type__{ TreinSoort }">{ TreinSoort }</span>
                    </span>
                    <span class="ns__departure-timedata">
                        <span class="ns__departure-time" data-time="{ VertrekTijd }"></span>
                        <span class="ns__departure-delay" data-delay="{ VertrekVertraging }"></span>
                    </span>
                </li>
            </div>
        </div>
    </div>

    <!-- external libs -->
    <script src="js/moment.js"></script>

    <!-- customer JS -->
    <script src="js/util.js"></script>
    <script src="js/ajax.js"></script>
    <script src="js/dom.js"></script>
    <script src="js/skeleton.js"></script>
    <script src="js/ns.js"></script>
    <script src="js/app.js"></script>
</body>
</html>