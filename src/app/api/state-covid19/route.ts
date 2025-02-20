export async function GET() {
    const response = await fetch(
        'https://covid19.traffy.in.th/api/state-covid19'
    );
    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
}
