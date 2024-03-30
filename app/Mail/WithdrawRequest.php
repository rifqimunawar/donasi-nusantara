<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class WithdrawRequest extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    protected $dataPenarik;

    public function __construct($dataPenarik)
    {
        $this->dataPenarik = $dataPenarik;
    }

    /**
     * Get the message envelope.
     */
    public function build()
    {
        return $this->view('mail.withdraw-request')
                    ->with(['dataPenarik' => $this->dataPenarik])
                    ->subject('Penarikan Saldo');
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
